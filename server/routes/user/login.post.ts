//登录接口
import { eq } from 'drizzle-orm'
export default eventHandler( async (event) => {
  const body = await readBody(event);

  // 在这里进行用户名和密码的验证逻辑
  const nameMatch = await useDB().select().from(tables.users).where(eq(tables.users.name, body.name)).all()
  // console.log(nameMatch);
  if (nameMatch.length<1) {
    return {code:401,data:null,message:'用户名不存在'}
  }
  if (nameMatch[0].password != body.password) {
    return {code:401,data:null,message:'密码错误'}
  }
  
  // 如果验证通过，生成一个包含用户信息的 payload
  const payload = { id: nameMatch[0].id };
  // // 生成 JWT 令牌
  const token = await generateToken(payload)
  // // 设置session
  await setUserSession(event, {
    user: {
      token:token
    },
    // Any extra fields
  })

  if (token) {
    //更新token
    const userOnline = await useDB().select().from(tables.online).where(eq(tables.online.userId, payload.id))
    console.log(userOnline);
    if (userOnline.length>0) {
      await useDB().update(tables.online).set({
        token:token,
        createdAt: new Date()
      }).where(and(
        eq(tables.online.userId, payload.id)
      ))
    } else {
      await useDB().insert(tables.online).values({
        userId: payload.id,
        token:token,
        createdAt: new Date()
      })
    }
  return {code:200,data:{token:token},message:'登录成功'}
    } else {
  return {code:500,data:{token:token},message:'系统异常'}
    }
 })

//登录接口
import { eq } from 'drizzle-orm'
// import { generateToken } from "../../utils/auth";
export default eventHandler( async (event) => {
console.log(event);
  const body = await readBody(event);
  console.log('123', body);


  // const { userName, password } = body;


  // 在这里进行用户名和密码的验证逻辑
  // await useDB().select().from(tables.todos).where(eq(tables.todos.userId, session.user.id)).all()
  const nameMatch = await useDB().select().from(tables.user).where(eq(tables.user.userName, body.userName)).all()
  console.log(nameMatch);
  if (nameMatch.length<1) {
    return {code:401,data:null,message:'用户名不存在'}
  }
  // const passwordMatch = await useDB().select(tables.user.password).from(tables.user).where(eq(tables.user.userName, userName))
  if (nameMatch[0].password != body.password) {
    return {code:401,data:null,message:'密码错误'}
  }
  
  // 如果验证通过，生成一个包含用户信息的 payload
  const payload = { id: nameMatch[0].id };
  console.log(payload);
  
  // const payload = {id:0};

  // // 生成 JWT 令牌
  const token = generateToken(payload);

  // // 返回包含令牌的响应
  // res.json({ token });
  // await setUserSession(event, {
  //   user: {
  //     token:token
  //   },
  //   // Any extra fields
  // })
  return {code:200,data:token,message:'登录成功'}
 })

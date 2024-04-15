//登录接口
import { eq } from 'drizzle-orm'
import jwt from "jsonwebtoken";

// import { requireUserSession } from '@nuxtjs/auth-utils';
export default eventHandler( async (event) => {
  const session:any = await requireUserSession(event)
  // console.log(session.user.token)
  try {
     // 验证 Token 的有效性
     const decoded = jwt.verify(session.user.token, 'your_secret_key');

     // 如果 Token 验证通过，则将解码后的用户信息添加到请求对象中
    console.log('decoded', decoded);
    if (decoded.id) {
      const userInfo: any = await useDB().select().from(tables.user).where(eq(tables.user.id, decoded.id))
      const { password, ...newUserInfo } = userInfo[0];
      return {code:200,data:newUserInfo,message:'请求成功'}
    }
    
  } catch (error) {
    console.log(error);
    return {code:401,message:"无效的令牌"}; 
  }
 })

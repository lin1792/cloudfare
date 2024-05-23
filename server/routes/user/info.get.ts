//登录接口
import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  console.log('event.context.auth',event.context.auth)
  const userInfo: any = await useDB().select().from(tables.user).where(eq(tables.user.id, event.context.auth.id))
  
  const { password, ...newUserInfo } = userInfo[0];
  return {code:200,data:newUserInfo,message:'请求成功'}

 })

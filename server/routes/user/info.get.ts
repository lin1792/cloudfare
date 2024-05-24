//登录接口
import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  console.log('event.context.auth',event.context.auth)
  const userInfo: any = await useDrizzle().select().from(tables.users).where(eq(tables.users.id, event.context.auth.id))
  
  const { password, ...newUserInfo } = userInfo[0];
  return {code:200,data:newUserInfo,message:'请求成功'}

 })

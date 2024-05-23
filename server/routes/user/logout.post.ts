//登录接口
// import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  
  await clearUserSession(event)

  return {code:200,data:null,message:'请求成功'}
 })

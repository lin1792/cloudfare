export default defineEventHandler(async (event) => {
  // const routeWhitelist = ["/user/login","/"] as any
  // //未在路由白名单的进行token验证
  // const isApiRequest = event.node.req.headers['content-type']?.includes('application/json');
  // if (isApiRequest&&!routeWhitelist.includes(event._path)) {
  //   const session:any = await requireUserSession(event)
  //   const decode: any = await verifyToken(session.user.token)
  //   if (!decode.id) {
  //     return { code: 401, data: null, message: '令牌无效' }
  //   }
    // event.context.auth = decode   //设置用户信息
  // }
})

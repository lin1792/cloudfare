export default defineNuxtRouteMiddleware((to, from) => {
  const limitList = ['/article', '/home', '/product'] // 配置适配 路由
  // if (to.fullPath=='/') {
  //     console.log(123);
  //     return navigateTo('/home')
  // }
  // if (limitList.includes(to.fullPath)) {
  //   if (!localStorage.getItem('token')) { // ！！！！这里有个大坑
  //     return navigateTo('/login') //一定要写return
  //   }
  // }
})
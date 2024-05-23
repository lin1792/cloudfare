
export default defineNitroPlugin(() => {
  // 定义一个函数来定时检查数据库中的 token 是否有效
  async function checkTokensValidity() {
    try {
      // 在这里编写检查数据库中 token 有效性的逻辑
      console.log('Checking token validity...');
      const online = await useDB().select().from(tables.online).all();
      online.forEach(async (item:any) => {
        console.log(item);
      // 例如，你可以在这里查询数据库，检查 token 的有效性，并做出相应的处理
        const decode: any = await verifyToken(item.token)
        if (!decode.id) {
          await useDB().delete(tables.online).where(eq(tables.online.userId,item.userId))
        }
      })
    } catch (error) {
      console.error('Error while checking token validity:', error);
    }
  }

  // 设置定时器，每隔一段时间执行一次检查函数
  // const interval = 100 * 1000; // 每隔 60 秒执行一次检查
  // setInterval(checkTokensValidity, interval);
});

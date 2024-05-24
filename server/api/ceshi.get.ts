import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {

  // const session = await requireUserSession(event)
  const todo = await useDrizzle().insert(tables.todos).values({
    userId: 1,
    title:'ceshitable',
    createdAt: new Date()
  }).returning().get()

  // List todos for the current user
  // const todo = await useDrizzle().select().from(tables.todos).all()

  return todo
})

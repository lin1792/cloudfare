import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
export const online = sqliteTable('online', {
  id:integer('id').primaryKey(),
  userId: integer('userId'),
  token: text('token').notNull(), // GitHub Id
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
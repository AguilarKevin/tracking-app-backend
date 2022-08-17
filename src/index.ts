import 'dotenv/config'
import {PrismaClient} from '@prisma/client'
import {app, start} from './server.js'

const prisma = new PrismaClient()

start(Number(process.env.PORT) || 3000)

app.get('/users', async (_, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

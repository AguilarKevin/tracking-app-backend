import {PrismaClient} from '@prisma/client'
import 'dotenv/config'

import {app, start} from './server.js'

start(Number(process.env.PORT) || 3000)

const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

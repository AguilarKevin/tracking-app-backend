import 'dotenv/config'
import prisma from './prisma-client.js'

import {app, start} from './server.js'

start(Number(process.env.PORT) || 3000)

app.get('/users', async (_, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

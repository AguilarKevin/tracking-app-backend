import tap from 'tap'
import prisma from '../helpers/prisma/create-client.js'

tap.test('test database connection', async (t) => {
  await prisma.$connect()

  t.end()
})

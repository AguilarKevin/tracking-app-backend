import prisma from '../../prisma-client.js'
import {type Request, type Response} from 'express'

export async function allUsers(_: Request, res: Response) {
  const users = await prisma.user.findMany()
  res.json(users)
}

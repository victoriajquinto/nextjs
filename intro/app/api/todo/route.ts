import { NextResponse } from "next/server"
import db from '@/utils/db'

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.create({
    data,
  })
  return NextResponse.json( { message: todo })
}

export const OPTIONS = async () => {
  return NextResponse.json({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
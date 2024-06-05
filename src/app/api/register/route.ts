import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function POST(request: Request) {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  const { userName, industry } = await request.json()

  const userId = session.user.id

  try {
    const user = await prisma.user.upsert({
      where: { id: userId },
      create: {
        userName: userName,
        industry: industry,
      },
      update: {
        userName: userName,
        industry: industry,
      },
    })

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to register user' },
      { status: 500 },
    )
  }
}

// app/api/register/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function POST(request: Request) {
  const { userName, industry } = await request.json()

  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  try {
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        userName: userName,
        industry: industry,
      },
    })

    return NextResponse.json({
      message: 'User updated successfully',
      user: { userName: user.userName, industry: user.industry },
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to register user' },
      { status: 500 },
    )
  }
}

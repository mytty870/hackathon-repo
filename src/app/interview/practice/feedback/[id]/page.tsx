/* eslint-disable */
import { getServerSession } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Evaluation } from './_components/Evaluation'

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession()

  const InterviewSessionId = params.id

  const interviewSession = await prisma.interviewSession.findFirst({
    where: { id: InterviewSessionId },
  })

  if (
    !session ||
    !session.user ||
    !interviewSession ||
    interviewSession.userId !== session.user.id
  ) {
    notFound()
  }

  return (
    <>
      <Evaluation interviewSession={interviewSession} />
    </>
  )
}

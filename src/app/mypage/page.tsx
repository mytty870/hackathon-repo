import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { InterviewHistory } from './_components/InterviewHistory'
import { prisma } from '@/lib/prisma'

export default async function Page() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  const interviewSessions = await prisma.interviewSession.findMany({
    where: {
      userId: session.user.id,
    },
  })

  console.log(interviewSessions)

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-6 rounded-lg border border-blue-300 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800">
          マイページ
        </h2>
        <p className="text-2xl">
          <span className="font-bold text-blue-600">
            {session.user.userName}
          </span>
          さんのマイページです
        </p>
      </div>
      <InterviewHistory interviewSessions={interviewSessions} />
    </div>
  )
}

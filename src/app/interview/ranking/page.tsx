import { prisma } from '@/lib/prisma'
import { ScoreDetails } from './scoredetails/scoredetails'

export default async function Page() {
  // とりあえず最大10件だけ取得
  const topInterviewSessions = await prisma.interviewSession.findMany({
    orderBy: {
      totalScore: 'desc',
    },
    take: 10,
    include: {
      user: {
        select: {
          userName: true,
        },
      },
    },
  })

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">ランキングページ</h1>
      {topInterviewSessions.length === 0 ? (
        <p className="text-center">インタビューの投稿がありません</p>
      ) : (
        <ul className="space-y-4">
          {topInterviewSessions.map((session, index) => (
            <li
              key={session.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
            >
              <div className="flex items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="m-2 text-lg font-semibold text-gray-800">
                    Score: {session.totalScore}
                  </p>
                  <p className="m-2 text-sm text-gray-700">
                    User: {session.user.userName}
                  </p>
                </div>
              </div>
              <ScoreDetails
                createdAt={session.createdAt}
                summary={session.summary}
                userName={session.user.userName}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

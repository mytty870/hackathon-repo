import { prisma } from '@/lib/prisma'

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
    <div>
      <h1>Ranking Page</h1>
      {topInterviewSessions.length === 0 ? (
        <p>インタビューの投稿がありません</p>
      ) : (
        <ul>
          {topInterviewSessions.map((session, index) => (
            <li key={session.id}>
              <div>
                <span>{index + 1}位</span>
                <p>Score: {session.totalScore}</p>
                <p>Date: {new Date(session.createdAt).toLocaleDateString()}</p>
                <p>Summary: {session.summary}</p>
                <p>User: {session.user.userName}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

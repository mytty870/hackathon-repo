import { InterviewSession } from '@prisma/client'
import Link from 'next/link'

type InterviewHistoryProps = {
  interviewSessions: InterviewSession[]
}

export const InterviewHistory = ({
  interviewSessions,
}: InterviewHistoryProps) => {
  const calculateTotalScore = (session: InterviewSession): number => {
    const scores: (number | null)[] = [
      session.question1Evaluation1Score,
      session.question1Evaluation2Score,
      session.question1Evaluation3Score,
      session.question1Evaluation4Score,
      session.question1Evaluation5Score,
      session.question2Evaluation1Score,
      session.question2Evaluation2Score,
      session.question2Evaluation3Score,
      session.question2Evaluation4Score,
      session.question2Evaluation5Score,
      session.question3Evaluation1Score,
      session.question3Evaluation2Score,
      session.question3Evaluation3Score,
      session.question3Evaluation4Score,
      session.question3Evaluation5Score,
      session.question4Evaluation1Score,
      session.question4Evaluation2Score,
      session.question4Evaluation3Score,
      session.question4Evaluation4Score,
      session.question4Evaluation5Score,
      session.question5Evaluation1Score,
      session.question5Evaluation2Score,
      session.question5Evaluation3Score,
      session.question5Evaluation4Score,
      session.question5Evaluation5Score,
    ]

    // nullのスコアを0に変換し合計を計算
    return scores.reduce<number>((total, score) => total + (score ?? 0), 0)
  }

  const sortedSessions = interviewSessions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h3 className="mb-4 text-2xl font-bold">面接練習履歴</h3>
      {sortedSessions.length === 0 ? (
        <p>現在面接練習履歴はございません。</p>
      ) : (
        <ul className="space-y-4">
          {sortedSessions.map((session, index) => (
            <li className="rounded-lg bg-white p-4 shadow-md" key={session.id}>
              <Link href={`/interview/practice/feedback/${session.id}`}>
                <div className="mb-2">
                  <h4 className="text-lg font-semibold">
                    {sortedSessions.length - index}回目
                  </h4>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-blue-500">
                    点数: {calculateTotalScore(session)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(session.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-2">
                  <p>Summary: {session.summary || 'No Summary'}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

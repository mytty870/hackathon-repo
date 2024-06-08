import { getServerSession } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.redirect('/login')
  }

  const userId = session.user.id

  const sessionData = await request.json()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateTotalScore = (data: any) => {
    let totalScore = 0
    const iterations = Math.min(5, data.length) // 配列の長さが5より短い場合に対応

    for (let i = 0; i < iterations; i++) {
      totalScore += data[i].response.evaluation1.score
      totalScore += data[i].response.evaluation2.score
      totalScore += data[i].response.evaluation3.score
      totalScore += data[i].response.evaluation4.score
      totalScore += data[i].response.evaluation5.score
    }

    return totalScore
  }

  const totalScore = calculateTotalScore(sessionData)

  const interviewSession = await prisma.interviewSession.create({
    data: {
      userId: userId,
      industry: '',
      businessType: '',
      summary: sessionData[5].reason,
      totalScore: totalScore,
      question1InputText: sessionData[0].input_text,
      question1Evaluation1Score: sessionData[0].response.evaluation1.score,
      question1Evaluation1Reason: sessionData[0].response.evaluation1.reason,
      question1Evaluation2Score: sessionData[0].response.evaluation2.score,
      question1Evaluation2Reason: sessionData[0].response.evaluation2.reason,
      question1Evaluation3Score: sessionData[0].response.evaluation3.score,
      question1Evaluation3Reason: sessionData[0].response.evaluation3.reason,
      question1Evaluation4Score: sessionData[0].response.evaluation4.score,
      question1Evaluation4Reason: sessionData[0].response.evaluation4.reason,
      question1Evaluation5Score: sessionData[0].response.evaluation5.score,
      question1Evaluation5Reason: sessionData[0].response.evaluation5.reason,
      question2InputText: sessionData[1].input_text,
      question2Evaluation1Score: sessionData[1].response.evaluation1.score,
      question2Evaluation1Reason: sessionData[1].response.evaluation1.reason,
      question2Evaluation2Score: sessionData[1].response.evaluation2.score,
      question2Evaluation2Reason: sessionData[1].response.evaluation2.reason,
      question2Evaluation3Score: sessionData[1].response.evaluation3.score,
      question2Evaluation3Reason: sessionData[1].response.evaluation3.reason,
      question2Evaluation4Score: sessionData[1].response.evaluation4.score,
      question2Evaluation4Reason: sessionData[1].response.evaluation4.reason,
      question2Evaluation5Score: sessionData[1].response.evaluation5.score,
      question2Evaluation5Reason: sessionData[1].response.evaluation5.reason,
      question3InputText: sessionData[2].input_text,
      question3Evaluation1Score: sessionData[2].response.evaluation1.score,
      question3Evaluation1Reason: sessionData[2].response.evaluation1.reason,
      question3Evaluation2Score: sessionData[2].response.evaluation2.score,
      question3Evaluation2Reason: sessionData[2].response.evaluation2.reason,
      question3Evaluation3Score: sessionData[2].response.evaluation3.score,
      question3Evaluation3Reason: sessionData[2].response.evaluation3.reason,
      question3Evaluation4Score: sessionData[2].response.evaluation4.score,
      question3Evaluation4Reason: sessionData[2].response.evaluation4.reason,
      question3Evaluation5Score: sessionData[2].response.evaluation5.score,
      question3Evaluation5Reason: sessionData[2].response.evaluation5.reason,
      question4InputText: sessionData[3].input_text,
      question4Evaluation1Score: sessionData[3].response.evaluation1.score,
      question4Evaluation1Reason: sessionData[3].response.evaluation1.reason,
      question4Evaluation2Score: sessionData[3].response.evaluation2.score,
      question4Evaluation2Reason: sessionData[3].response.evaluation2.reason,
      question4Evaluation3Score: sessionData[3].response.evaluation3.score,
      question4Evaluation3Reason: sessionData[3].response.evaluation3.reason,
      question4Evaluation4Score: sessionData[3].response.evaluation4.score,
      question4Evaluation4Reason: sessionData[3].response.evaluation4.reason,
      question4Evaluation5Score: sessionData[3].response.evaluation5.score,
      question4Evaluation5Reason: sessionData[3].response.evaluation5.reason,
      question5InputText: sessionData[4].input_text,
      question5Evaluation1Score: sessionData[4].response.evaluation1.score,
      question5Evaluation1Reason: sessionData[4].response.evaluation1.reason,
      question5Evaluation2Score: sessionData[4].response.evaluation2.score,
      question5Evaluation2Reason: sessionData[4].response.evaluation2.reason,
      question5Evaluation3Score: sessionData[4].response.evaluation3.score,
      question5Evaluation3Reason: sessionData[4].response.evaluation3.reason,
      question5Evaluation4Score: sessionData[4].response.evaluation4.score,
      question5Evaluation4Reason: sessionData[4].response.evaluation4.reason,
      question5Evaluation5Score: sessionData[4].response.evaluation5.score,
      question5Evaluation5Reason: sessionData[4].response.evaluation5.reason,
    },
  })

  return NextResponse.json({ message: 'Success', id: interviewSession.id })
}

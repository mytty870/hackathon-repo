/* eslint-disable */
'use client'
import { EvaluationRadarChart } from './EvaluationRaderChart'
import { EvaluationDetails } from './EvaluationDetails'

import { Accordion, AccordionItem } from '@nextui-org/react'
import TotalScoreRadarChart from './TotalScoreRadarChart/TotalScoreRadarChart'

function transformData(interviewSession: any) {
  const transformedData = {
    id: interviewSession.id,
    userId: interviewSession.userId,
    industry: interviewSession.industry,
    businessType: interviewSession.businessType,
    createdAt: interviewSession.createdAt,
    summary: interviewSession.summary,
    evaluation1TotalScore:
      interviewSession.question1Evaluation1Score +
      interviewSession.question2Evaluation1Score +
      interviewSession.question3Evaluation1Score +
      interviewSession.question4Evaluation1Score +
      interviewSession.question5Evaluation1Score,
    evaluation2TotalScore:
      interviewSession.question1Evaluation2Score +
      interviewSession.question2Evaluation2Score +
      interviewSession.question3Evaluation2Score +
      interviewSession.question4Evaluation2Score +
      interviewSession.question5Evaluation2Score,
    evaluation3TotalScore:
      interviewSession.question1Evaluation3Score +
      interviewSession.question2Evaluation3Score +
      interviewSession.question3Evaluation3Score +
      interviewSession.question4Evaluation3Score +
      interviewSession.question5Evaluation3Score,
    evaluation4TotalScore:
      interviewSession.question1Evaluation4Score +
      interviewSession.question2Evaluation4Score +
      interviewSession.question3Evaluation4Score +
      interviewSession.question4Evaluation4Score +
      interviewSession.question5Evaluation4Score,
    evaluation5TotalScore:
      interviewSession.question1Evaluation5Score +
      interviewSession.question2Evaluation5Score +
      interviewSession.question3Evaluation5Score +
      interviewSession.question4Evaluation5Score +
      interviewSession.question5Evaluation5Score,
    questions: [
      {
        inputText: interviewSession.question1InputText,
        evaluations: [
          {
            score: interviewSession.question1Evaluation1Score,
            reason: interviewSession.question1Evaluation1Reason,
          },
          {
            score: interviewSession.question1Evaluation2Score,
            reason: interviewSession.question1Evaluation2Reason,
          },
          {
            score: interviewSession.question1Evaluation3Score,
            reason: interviewSession.question1Evaluation3Reason,
          },
          {
            score: interviewSession.question1Evaluation4Score,
            reason: interviewSession.question1Evaluation4Reason,
          },
          {
            score: interviewSession.question1Evaluation5Score,
            reason: interviewSession.question1Evaluation5Reason,
          },
        ],
      },
      {
        inputText: interviewSession.question2InputText,
        evaluations: [
          {
            score: interviewSession.question2Evaluation1Score,
            reason: interviewSession.question2Evaluation1Reason,
          },
          {
            score: interviewSession.question2Evaluation2Score,
            reason: interviewSession.question2Evaluation2Reason,
          },
          {
            score: interviewSession.question2Evaluation3Score,
            reason: interviewSession.question2Evaluation3Reason,
          },
          {
            score: interviewSession.question2Evaluation4Score,
            reason: interviewSession.question2Evaluation4Reason,
          },
          {
            score: interviewSession.question2Evaluation5Score,
            reason: interviewSession.question2Evaluation5Reason,
          },
        ],
      },
      {
        inputText: interviewSession.question3InputText,
        evaluations: [
          {
            score: interviewSession.question3Evaluation1Score,
            reason: interviewSession.question3Evaluation1Reason,
          },
          {
            score: interviewSession.question3Evaluation2Score,
            reason: interviewSession.question3Evaluation2Reason,
          },
          {
            score: interviewSession.question3Evaluation3Score,
            reason: interviewSession.question3Evaluation3Reason,
          },
          {
            score: interviewSession.question3Evaluation4Score,
            reason: interviewSession.question3Evaluation4Reason,
          },
          {
            score: interviewSession.question3Evaluation5Score,
            reason: interviewSession.question3Evaluation5Reason,
          },
        ],
      },
      {
        inputText: interviewSession.question4InputText,
        evaluations: [
          {
            score: interviewSession.question4Evaluation1Score,
            reason: interviewSession.question4Evaluation1Reason,
          },
          {
            score: interviewSession.question4Evaluation2Score,
            reason: interviewSession.question4Evaluation2Reason,
          },
          {
            score: interviewSession.question4Evaluation3Score,
            reason: interviewSession.question4Evaluation3Reason,
          },
          {
            score: interviewSession.question4Evaluation4Score,
            reason: interviewSession.question4Evaluation4Reason,
          },
          {
            score: interviewSession.question4Evaluation5Score,
            reason: interviewSession.question4Evaluation5Reason,
          },
        ],
      },
      {
        inputText: interviewSession.question5InputText,
        evaluations: [
          {
            score: interviewSession.question5Evaluation1Score,
            reason: interviewSession.question5Evaluation1Reason,
          },
          {
            score: interviewSession.question5Evaluation2Score,
            reason: interviewSession.question5Evaluation2Reason,
          },
          {
            score: interviewSession.question5Evaluation3Score,
            reason: interviewSession.question5Evaluation3Reason,
          },
          {
            score: interviewSession.question5Evaluation4Score,
            reason: interviewSession.question5Evaluation4Reason,
          },
          {
            score: interviewSession.question5Evaluation5Score,
            reason: interviewSession.question5Evaluation5Reason,
          },
        ],
      },
    ],
  }
  return transformedData
}

type EvaluationProps = {
  id: string
  userId: string
  industry: string | null
  businessType: string | null
  createdAt: Date
  question1InputText: string | null
  question1Evaluation1Score: number | null
  question1Evaluation1Reason: string | null
  question1Evaluation2Score: number | null
  question1Evaluation2Reason: string | null
  question1Evaluation3Score: number | null
  question1Evaluation3Reason: string | null
  question1Evaluation4Score: number | null
  question1Evaluation4Reason: string | null
  question1Evaluation5Score: number | null
  question1Evaluation5Reason: string | null
  question2InputText: string | null
  question2Evaluation1Score: number | null
  question2Evaluation1Reason: string | null
  question2Evaluation2Score: number | null
  question2Evaluation2Reason: string | null
  question2Evaluation3Score: number | null
  question2Evaluation3Reason: string | null
  question2Evaluation4Score: number | null
  question2Evaluation4Reason: string | null
  question2Evaluation5Score: number | null
  question2Evaluation5Reason: string | null
  question3InputText: string | null
  question3Evaluation1Score: number | null
  question3Evaluation1Reason: string | null
  question3Evaluation2Score: number | null
  question3Evaluation2Reason: string | null
  question3Evaluation3Score: number | null
  question3Evaluation3Reason: string | null
  question3Evaluation4Score: number | null
  question3Evaluation4Reason: string | null
  question3Evaluation5Score: number | null
  question3Evaluation5Reason: string | null
  question4InputText: string | null
  question4Evaluation1Score: number | null
  question4Evaluation1Reason: string | null
  question4Evaluation2Score: number | null
  question4Evaluation2Reason: string | null
  question4Evaluation3Score: number | null
  question4Evaluation3Reason: string | null
  question4Evaluation4Score: number | null
  question4Evaluation4Reason: string | null
  question4Evaluation5Score: number | null
  question4Evaluation5Reason: string | null
  question5InputText: string | null
  question5Evaluation1Score: number | null
  question5Evaluation1Reason: string | null
  question5Evaluation2Score: number | null
  question5Evaluation2Reason: string | null
  question5Evaluation3Score: number | null
  question5Evaluation3Reason: string | null
  question5Evaluation4Score: number | null
  question5Evaluation4Reason: string | null
  question5Evaluation5Score: number | null
  question5Evaluation5Reason: string | null
}
export const Evaluation = ({ interviewSession }: EvaluationProps) => {
  console.log(interviewSession)

  const transformedData = transformData(interviewSession)
  console.log(transformedData.questions)

  const evaluationResults = transformedData.questions

  const totalScore = transformedData.questions.reduce((acc, question) => {
    const questionTotal = question.evaluations.reduce(
      (sum, evaluation) => sum + evaluation.score,
      0,
    )
    return acc + questionTotal
  }, 0)

  const evaluationTotalScores = [
    transformedData.evaluation1TotalScore,
    transformedData.evaluation2TotalScore,
    transformedData.evaluation3TotalScore,
    transformedData.evaluation4TotalScore,
    transformedData.evaluation5TotalScore,
  ]

  console.log(totalScore)

  return (
    <div>
      <h2>総合スコア</h2>
      <div className="flex flex-wrap items-start">
        <div className="order-1 w-full md:order-1 md:w-1/2">
          <h1 className="p-5 text-7xl">{totalScore}</h1>
          <p className="p-5">{transformedData.summary}</p>
        </div>
        <div className="order-2 flex w-full justify-center p-3 md:order-2 md:w-1/2">
          <TotalScoreRadarChart evaluationResults={evaluationResults} />
        </div>
      </div>

      <Accordion>
        {evaluationResults.map((result, index) => (
          <AccordionItem
            key={index}
            aria-label="詳細"
            title={`質問 ${index + 1}の詳細`}
          >
            <div key={index} className="mb-5">
              <h2 className="text-lg font-semibold">質問{index + 1}の結果</h2>
              <div className="mt-3 flex flex-wrap">
                <div className="order-2 w-full p-2 md:order-1 md:w-1/2">
                  <EvaluationDetails evaluationResult={result.evaluations} />
                </div>
                <div className="order-1 flex w-full justify-center p-2 md:order-2 md:w-1/2">
                  <EvaluationRadarChart evaluationResult={result} />
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
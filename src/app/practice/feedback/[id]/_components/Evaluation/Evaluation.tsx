/* eslint-disable */
'use client'
import { EvaluationRadarChart } from './EvaluationRaderChart'
import { EvaluationDetails } from './EvaluationDetails'

import { Accordion, AccordionItem } from '@nextui-org/react'

function transformData(interviewSession: any) {
  const transformedData = {
    id: interviewSession.id,
    userId: interviewSession.userId,
    industry: interviewSession.industry,
    businessType: interviewSession.businessType,
    createdAt: interviewSession.createdAt,
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

  return (
    <div>
      <h2>総合スコア</h2>
      {/* <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h1 className="p-5 text-7xl">100</h1>
          <p className="p-5">
            無意識の発声や特定のフレーズが多く、一貫した意思の表現が見られないため、評価できませんでした。適切な発声練習や言葉遣いの訓練が必要です。
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <TotalScoreRadarChart evaluationResults={evaluationResults} />
        </div>
      </div> */}

      <Accordion>
        {evaluationResults.map((result, index) => (
          <AccordionItem
            key={index}
            aria-label="詳細"
            title={`質問 ${index + 1}の詳細`}
          >
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>質問{index + 1}の結果</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <EvaluationDetails evaluationResult={result.evaluations} />
                </div>
                <div
                  style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
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

import React from 'react'
import { EvaluationResult } from '../Question'
import EvaluationDetails from './EvaluationDetails/EvaluationDetails'
import EvaluationRadarChart from './EvaluationRadarChart/EvaluationRadarChart'
import TotalScoreRadarChart from './TotalScoreRadarChart/TotalScoreRadarChart'
import { Accordion, AccordionItem } from '@nextui-org/react'

type EvaluationProps = {
  evaluationResults: EvaluationResult[] | null
}

export const Evaluation: React.FC<EvaluationProps> = ({
  evaluationResults,
}) => {
  if (!evaluationResults) {
    return null
  }
  return (
    <div>
      <div className="flex flex-wrap items-start">
        <div className="order-1 w-full md:order-1 md:w-1/2">
          <h1 className="p-5 text-7xl">100</h1>
          <p className="p-5">
            無意識の発声や特定のフレーズが多く、一貫した意思の表現が見られないため、評価できませんでした。適切な発声練習や言葉遣いの訓練が必要です。
          </p>
        </div>
        <div className="order-2 flex w-full justify-center p-3 md:order-2 md:w-1/2">
          <TotalScoreRadarChart evaluationResults={evaluationResults} />
        </div>
      </div>

      <Accordion className="p-3">
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
                  <EvaluationDetails evaluationResult={result} />
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

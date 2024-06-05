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
      <h2>総合スコア</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h1 className="p-5 text-7xl">100</h1>
          <p className="p-5">
            無意識の発声や特定のフレーズが多く、一貫した意思の表現が見られないため、評価できませんでした。適切な発声練習や言葉遣いの訓練が必要です。
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
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
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>質問{index + 1}の結果</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <EvaluationDetails evaluationResult={result} />
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

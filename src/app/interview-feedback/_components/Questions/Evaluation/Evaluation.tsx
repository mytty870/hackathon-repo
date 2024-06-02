import React from 'react'

import { EvaluationResult } from '../Question'
import EvaluationDetails from './EvaluationDetails/EvaluationDetails'
import EvaluationRadarChart from './EvaluationRadarChart/EvaluationRadarChart'
import TotalScoreRadarChart from './TotalScoreRadarChart/TotalScoreRadarChart'

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
      {evaluationResults.map((result, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>質問{index + 1}の結果</h2>
          <EvaluationRadarChart evaluationResult={result} />
          <EvaluationDetails evaluationResult={result} />
        </div>
      ))}
      <h2>総合スコア</h2>
      <TotalScoreRadarChart evaluationResults={evaluationResults} />
    </div>
  )
}

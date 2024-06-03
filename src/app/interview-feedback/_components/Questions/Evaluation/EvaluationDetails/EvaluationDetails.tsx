import React from 'react'

type EvaluationDetail = {
  score: number
  reason: string
}

type EvaluationResponse = {
  evaluation1: EvaluationDetail
  evaluation2: EvaluationDetail
  evaluation3: EvaluationDetail
  evaluation4: EvaluationDetail
  evaluation5: EvaluationDetail
}

type EvaluationResult = {
  filename: string
  input_text: string
  response: EvaluationResponse
}

type EvaluationDetailsProps = {
  evaluationResult: EvaluationResult
}

const EvaluationDetails: React.FC<EvaluationDetailsProps> = ({
  evaluationResult,
}) => {
  const evaluations = [
    evaluationResult.response.evaluation1,
    evaluationResult.response.evaluation2,
    evaluationResult.response.evaluation3,
    evaluationResult.response.evaluation4,
    evaluationResult.response.evaluation5,
  ]

  return (
    <div>
      <h3>評価詳細 ({evaluationResult.filename})</h3>
      <ul>
        {evaluations.map((evaluation, index) => (
          <li key={index}>
            <strong>評価{index + 1}:</strong> スコア: {evaluation.score}, 理由:{' '}
            {evaluation.reason}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EvaluationDetails
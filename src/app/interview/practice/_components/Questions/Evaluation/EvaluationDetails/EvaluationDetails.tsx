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

  const labels = [
    '口癖',
    '一人称の統一',
    '敬語の使い方',
    '論理性',
    '言葉の使い方',
  ]

  return (
    <div>
      <h3>評価詳細 ({evaluationResult.filename})</h3>
      <ul className="m-0 list-none p-0">
        {evaluations.map((evaluation, index) => (
          <li key={index} className="my-2 border-b border-gray-300 py-2">
            <strong>{labels[index]}:</strong> スコア: {evaluation.score} , 理由:{' '}
            {evaluation.reason}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EvaluationDetails

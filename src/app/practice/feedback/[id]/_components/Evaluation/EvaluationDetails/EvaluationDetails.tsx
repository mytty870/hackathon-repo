/* eslint-disable */

export const EvaluationDetails = ({ evaluationResult }) => {
  console.log('bb', evaluationResult)
  return (
    <div>
      <ul className="m-0 list-none p-0">
        {evaluationResult.map((evaluation, index) => (
          <li key={index} className="my-2 border-b border-gray-300 py-2">
            <strong>評価{index + 1}:</strong> スコア: {evaluation.score}, 理由:{' '}
            {evaluation.reason}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* eslint-disable */

export const EvaluationDetails = ({ evaluationResult }: any) => {
  const labels = [
    '口癖',
    '一人称の統一',
    '敬語の使い方',
    '論理性',
    '言葉の使い方',
  ]

  return (
    <div>
      <ul className="m-0 list-none p-0">
        {evaluationResult.map((evaluation: any, index: number) => (
          <li key={index} className="my-2 border-b border-gray-300 py-2">
            <div className="flex justify-between mb-2">
              <p className="font-bold">{labels[index]}</p>
              <p className="font-semibold">{evaluation.score}点</p>
            </div>
            <div>{evaluation.reason}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

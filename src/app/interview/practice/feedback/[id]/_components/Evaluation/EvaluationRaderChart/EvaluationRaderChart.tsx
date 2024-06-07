/* eslint-disable */
import { Radar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

export const EvaluationRadarChart = ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  evaluationResult,
}) => {
  const labels = [
    '口癖',
    '一人称の統一',
    '敬語の使い方',
    '論理性',
    '言葉の使い方',
  ]
  const scores = [
    evaluationResult.evaluations[0].score,
    evaluationResult.evaluations[1].score,
    evaluationResult.evaluations[2].score,
    evaluationResult.evaluations[3].score,
    evaluationResult.evaluations[4].score,
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'スコア',
        data: scores,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: Partial<any> = {
    scales: {
      r: {
        min: 0,
        max: 20,
        ticks: {
          beginAtZero: true,
        },
        pointLabels: {
          font: {
            size: 12, // フォントサイズ
            weight: 700, // フォントの太さを設定
          },
        },
      },
    },
  }

  return <Radar data={data} options={options} />
}

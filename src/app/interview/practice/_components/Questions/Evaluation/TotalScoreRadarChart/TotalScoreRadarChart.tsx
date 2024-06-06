import React from 'react'
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

type TotalEvaluationRadarChartProps = {
  evaluationResults: EvaluationResult[]
}

const TotalEvaluationRadarChart: React.FC<TotalEvaluationRadarChartProps> = ({
  evaluationResults,
}) => {
  const labels = ['評価1', '評価2', '評価3', '評価4', '評価5']

  // 各評価のスコアを合計
  const totalScores = labels.map((label, index) =>
    evaluationResults.reduce(
      (sum, result) => sum + Object.values(result.response)[index].score,
      0,
    ),
  )

  const data = {
    labels,
    datasets: [
      {
        label: '総合評価スコア (100点満点)',
        data: totalScores,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: Partial<any> = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          beginAtZero: true,
        },
      },
    },
  }

  return <Radar data={data} options={options} />
}

export default TotalEvaluationRadarChart

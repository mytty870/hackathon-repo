'use client'
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

type EvaluationRadarChartProps = {
  evaluationResult: EvaluationResult
}

const EvaluationRadarChart: React.FC<EvaluationRadarChartProps> = ({
  evaluationResult,
}) => {
  const labels = ['評価1', '評価2', '評価3', '評価4', '評価5']
  const scores = [
    evaluationResult.response.evaluation1.score,
    evaluationResult.response.evaluation2.score,
    evaluationResult.response.evaluation3.score,
    evaluationResult.response.evaluation4.score,
    evaluationResult.response.evaluation5.score,
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
      },
    },
  }

  return <Radar data={data} options={options} />
}

export default EvaluationRadarChart

/* eslint-disable */
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

export const TotalEvaluationRadarChart = ({ evaluationResults }) => {
  const labels = ['評価1', '評価2', '評価3', '評価4', '評価5']

  // 各評価のスコアを合計

  const data = {
    labels,
    datasets: [
      {
        label: '総合評価スコア (500点満点)',
        data: evaluationResults,
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

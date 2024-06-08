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
import TotalEvaluationRadarChart from '@/app/interview/practice/_components/Questions/Evaluation/TotalScoreRadarChart/TotalScoreRadarChart'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

export const TotalScoreRadarChart = ({ evaluationTotalScores }) => {
  const labels = [
    '口癖',
    '一人称の統一',
    '敬語の使い方',
    '論理性',
    '言葉の使い方',
  ]

  // 各評価のスコアを合計

  const data = {
    labels,
    datasets: [
      {
        label: '総合評価スコア (500点満点)',
        data: evaluationTotalScores,
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

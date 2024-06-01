'use client'

import { useState } from 'react'
import { Question } from './Question'

export const Questions = () => {
  const [questionNum, setQuestionNum] = useState(0)

  const [evaluateFlag, setEvaluateFlag] = useState(false)

  const [file1, setFile1] = useState<string | null>(null)
  const [file2, setFile2] = useState<string | null>(null)
  const [file3, setFile3] = useState<string | null>(null)

  if (evaluateFlag) {
    return (
      <div>
        <h1>評価</h1>
        <div>file1: {file1}</div>
        <div>file2: {file2}</div>
        <div>file3: {file3}</div>
      </div>
    )
  }

  return (
    <Question
      questionNum={questionNum}
      setQuestionNum={setQuestionNum}
      setEvaluateFlag={setEvaluateFlag}
      setFile1={setFile1}
      setFile2={setFile2}
      setFile3={setFile3}
    />
  )
}

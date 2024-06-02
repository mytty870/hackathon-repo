'use client'

import { useState } from 'react'
import { EvaluationResult, Question } from './Question'
import { Evaluation } from './Evaluation'

export const Questions = () => {
  const [recordings, setRecordings] = useState<Blob[]>([])
  const [questionNum, setQuestionNum] = useState(0)

  const [evaluateFlag, setEvaluateFlag] = useState(false)

  const [isRecording, setIsRecording] = useState(false)
  const [isRecorded, setIsRecorded] = useState(false)

  const [evaluationResult, setEvaluationResult] = useState<
    EvaluationResult[] | null
  >(null)

  if (evaluateFlag) {
    return (
      <div>
        {/* <h1>評価</h1>
        <div>評価結果: {JSON.stringify(evaluationResult)}</div> */}
        <Evaluation evaluationResults={evaluationResult} />
      </div>
    )
  }

  return (
    <Question
      setRecordings={setRecordings}
      recordings={recordings}
      questionNum={questionNum}
      setQuestionNum={setQuestionNum}
      setEvaluateFlag={setEvaluateFlag}
      isRecording={isRecording}
      setIsRecording={setIsRecording}
      isRecorded={isRecorded}
      setIsRecorded={setIsRecorded}
      setEvaluationResult={setEvaluationResult}
    />
  )
}

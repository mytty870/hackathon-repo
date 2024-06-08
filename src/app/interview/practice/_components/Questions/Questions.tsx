'use client'

import { useState } from 'react'
import { Question } from './Question'

export const Questions = () => {
  const [recordings, setRecordings] = useState<Blob[]>([])
  const [questionNum, setQuestionNum] = useState(0)

  const [isRecording, setIsRecording] = useState(false)
  const [isRecorded, setIsRecorded] = useState(false)

  return (
    <Question
      setRecordings={setRecordings}
      recordings={recordings}
      questionNum={questionNum}
      setQuestionNum={setQuestionNum}
      isRecording={isRecording}
      setIsRecording={setIsRecording}
      isRecorded={isRecorded}
      setIsRecorded={setIsRecorded}
    />
  )
}

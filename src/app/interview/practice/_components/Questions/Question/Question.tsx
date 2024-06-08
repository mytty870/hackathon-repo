/* eslint-disable */
import { Button } from '@nextui-org/react'
import { Recorder } from '../Recorder'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

type EvaluationDetail = {
  score: number
  reason: string
}

// 各録音ファイルの評価結果を定義
type EvaluationResponse = {
  evaluation1: EvaluationDetail
  evaluation2: EvaluationDetail
  evaluation3: EvaluationDetail
  evaluation4: EvaluationDetail
  evaluation5: EvaluationDetail
}

// 各録音ファイルに対応する評価結果全体を定義
export type EvaluationResult = {
  filename: string
  input_text: string
  response: EvaluationResponse
}

export type QuestionProps = {
  questionNum: number
  setQuestionNum: (num: number) => void
  recordings: Blob[]
  setRecordings: React.Dispatch<React.SetStateAction<Blob[]>>
  isRecording: boolean
  setIsRecording: (isRecording: boolean) => void
  isRecorded: boolean
  setIsRecorded: (isRecorded: boolean) => void
}

export const Question = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  recordings,
  setRecordings,
  questionNum,
  setQuestionNum,
  isRecording,
  setIsRecording,
  isRecorded,
  setIsRecorded,
}: QuestionProps) => {
  const questionnaire = [
    '簡単な自己紹介と自己PRをお願いいたします。',
    'あなたの強みについて教えてください。',
    '就活の軸について教えてください。',
    '仕事をするうえで大事なことについて教えてください。',
    '学生時代に頑張ったことを教えてください。',
    '自身に年収を提示するなら何円にしますか？',
  ]

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1)
    setIsRecorded(false)
  }

  const handleEvaluate = async () => {
    setIsLoading(true)
    const formData = new FormData()

    recordings.forEach((recording, index) => {
      formData.append('files', recording, `recording_${index + 1}.wav`)
    })

    try {
      // const response = await fetch('http://localhost:8080/upload/', {
      const response = await fetch(
        // 'https://hackathon-backend-0608.onrender.com/upload/',
        'https://hackathon-backend-0608-wspwxynxtq-an.a.run.app/upload/',
        {
          method: 'POST',
          body: formData,
        },
      )

      const result = await response.json()

      const saveResponse = await fetch('/api/interview-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: result,
      })

      const saveResult = await saveResponse.json()

      if (!saveResponse.ok) {
        throw new Error('Failed to save evaluation result')
      } else {
        router.push(`/interview/practice/feedback/${saveResult.id}`)
      }

      setIsLoading(false)
    } catch (error) {
      console.error('Error uploading recordings:', error)
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="mb-4 text-2xl">質問{questionNum + 1}</h2>
      <div>{questionnaire[questionNum]}</div>
      <Recorder
        setRecordings={setRecordings}
        questionNum={questionNum}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        setIsRecorded={setIsRecorded}
      />
      <div>
        {questionNum === 4 ? (
          <>
            <Button
              className="gap-0 rounded-full border-2 border-gray-400 hover:border-gray-600 focus:outline-none"
              onClick={handleEvaluate}
              isDisabled={!isRecorded}
              isLoading={isLoading}
              endContent={!isLoading && <ArrowRightAltIcon />}
            >
              {isLoading ? '評価中' : '評価する'}
            </Button>
            <p className="text-red-500 text-sm mt-4">
              ※結果が出るまでに少し時間がかかります
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <Button
              onClick={handleNextQuestion}
              isDisabled={!isRecorded}
              className="flex size-12 items-center justify-center rounded-full border-2 border-gray-400 hover:border-gray-600 focus:outline-none"
              endContent={<ArrowRightAltIcon />}
              variant="light"
            />
          </div>
        )}
      </div>
    </div>
  )
}

import { Button } from '@nextui-org/react'
import { Recorder } from '../Recorder'
import { useState } from 'react'
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
  setEvaluateFlag: (flag: boolean) => void
  recordings: Blob[]
  setRecordings: React.Dispatch<React.SetStateAction<Blob[]>>
  isRecording: boolean
  setIsRecording: (isRecording: boolean) => void
  isRecorded: boolean
  setIsRecorded: (isRecorded: boolean) => void
  setEvaluationResult: (result: EvaluationResult[]) => void
}

export const Question = ({
  recordings,
  setRecordings,
  questionNum,
  setQuestionNum,
  setEvaluateFlag,
  isRecording,
  setIsRecording,
  isRecorded,
  setIsRecorded,
  setEvaluationResult,
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

  const handleNextQuestion = () => {
    setQuestionNum(questionNum + 1)
    setIsRecorded(false)
  }

  const handleEvaluate = async () => {
    const formData = new FormData()
    recordings.forEach((recording, index) => {
      formData.append('files', recording, `recording_${index + 1}.wav`)
    })

    try {
      setIsLoading(true)
      // const response = await fetch('http://localhost:8080/upload/', {
      //   method: 'POST',
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to upload recordings');
      // }

      // const result = await response.json();

      const result = [
        {
          filename: 'recording_1.wav',
          input_text: 'はぁ',
          response: {
            evaluation1: {
              score: 0,
              reason:
                '「はぁ」という発言は、不適切な口癖と見なされ、プロフェッショナルな場では避けるべきです。明確で礼儀正しい表現を使うことが求められます。',
            },
            evaluation2: {
              score: 0,
              reason:
                '一人称が使用されていないため、評価不可能です。適切な一人称を使用して、自己紹介や意見を述べる文章が必要です。',
            },
            evaluation3: {
              score: 0,
              reason:
                '敬語の使い方については評価できません。「はぁ」はビジネスシーンでの敬語として認識されず、不適切です。丁寧な言葉遣いを心がける必要があります。',
            },
            evaluation4: {
              score: 0,
              reason:
                '論理性はなく、どのような意図や結論も見られません。結論から先に話し、具体的な根拠やエピソードを提供する必要があります。',
            },
            evaluation5: {
              score: 0,
              reason:
                '「はぁ」では具体性も明確性も欠けており、適切な言葉の使い方がされていません。具体的で明確かつ適切な表現を絡めた文章を使うべきです。',
            },
          },
        },
        {
          filename: 'recording_2.wav',
          input_text: 'あーーー',
          response: {
            evaluation1: {
              score: 10,
              reason:
                '無意識の発声頻度が高いです。特に「えー」や「あのー」が多く、流暢さに欠けます。改善策としては、明確な発声練習や意識的に言葉を選ぶトレーニングが必要です。',
            },
            evaluation2: {
              score: 20,
              reason:
                '一人称の使い方に問題が見られませんでした。短い発言だったため、一人称が混在していないかの評価は限定的です。',
            },
            evaluation3: {
              score: 15,
              reason:
                '短い発言のため、敬語の使い方の問題は見られませんが、適切な言葉遣いがされているか確認できなかったため、満点とは言えません。',
            },
            evaluation4: {
              score: 5,
              reason:
                '結論や詳細な説明がなく、論理性が欠けています。結論から述べる練習や、具体的なエピソードを盛り込むことが必要です。',
            },
            evaluation5: {
              score: 5,
              reason:
                '言葉の使い方が具体的でなく、曖昧なものとなっています。より具体的な言葉を使い、明確な表現を心がける必要があります。',
            },
          },
        },
        {
          filename: 'recording_3.wav',
          input_text: 'あああああああああああ',
          response: {
            evaluation1: {
              score: 0,
              reason:
                '無意識の発声や特定のフレーズが多く、一貫した意思の表現が見られないため、評価できませんでした。適切な発声練習や言葉遣いの訓練が必要です。',
            },
            evaluation2: {
              score: 0,
              reason:
                '一人称が一貫しておらず、ビジネスシーンにおける適切な一人称の使用が見られないため、評価できませんでした。',
            },
            evaluation3: {
              score: 0,
              reason:
                '敬語の使用が不適切であり、二重敬語や正しい敬語の使い分けがされていません。適切な敬語の訓練が必要です。',
            },
            evaluation4: {
              score: 0,
              reason:
                '論理的な話し方が全く見られず、結論や根拠の説明がされていないため、評価できませんでした。',
            },
            evaluation5: {
              score: 0,
              reason:
                '言葉の使い方が不明瞭であり、具体的で明確な表現が見られないため、評価できませんでした。',
            },
          },
        },
      ]

      setEvaluationResult(result) // API の結果を保存
      setEvaluateFlag(true)
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
          <Button
            color="secondary"
            onClick={handleEvaluate}
            isDisabled={!isRecorded}
            isLoading={isLoading}
            className="mt-4"
          >
            {isLoading ? '評価中' : '評価する'}
          </Button>
        ) : (
          <div className="flex items-center justify-center">
            <Button
              // color="secondary"
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

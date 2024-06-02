import { Button } from '@nextui-org/react'

export type QuestionProps = {
  questionNum: number
  setQuestionNum: (num: number) => void
  setEvaluateFlag: (flag: boolean) => void
  setFile1: (file: string | null) => void
  setFile2: (file: string | null) => void
  setFile3: (file: string | null) => void
  setFile4: (file: string | null) => void
  setFile5: (file: string | null) => void
}

export const Question = ({
  questionNum,
  setQuestionNum,
  setEvaluateFlag,
  setFile1,
  setFile2,
  setFile3,
  setFile4,
  setFile5,
}: QuestionProps) => {
  const questionnaire = [
    '簡単な自己紹介と自己PRをお願いいたします。',
    'あなたの強みについて教えてください。',
    '就活の軸について教えてください。',
    '仕事をするうえで大事なことについて教えてください。',
    '学生時代に頑張ったことを教えてください。',
    '自身に年収を提示するなら何円にしますか？',
  ]

  const handleNextQuestion = () => {
    if (questionNum === 0) {
      setFile1('file1')
    } else if (questionNum === 1) {
      setFile2('file2')
    } else if (questionNum === 2) {
      setFile3('file3')
    } else if (questionNum === 3) {
      setFile4('file4')
    } else if (questionNum === 4) {
      setFile5('file5')
    }
    setQuestionNum(questionNum + 1)
  }

  const handleEvaluate = () => {
    setFile5('file5')
    setEvaluateFlag(true)
  }

  return (
    <>
      <h2 className="text-xl">質問{questionNum + 1}</h2>
      <div>{questionnaire[questionNum]}</div>
      {questionNum === 4 ? (
        <Button className="mt-4" onClick={handleEvaluate}>
          評価する
        </Button>
      ) : (
        <Button className="mt-4" onClick={handleNextQuestion}>
          次の質問へ
        </Button>
      )}
    </>
  )
}

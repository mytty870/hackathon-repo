import { Button } from '@nextui-org/react'

export type QuestionProps = {
  questionNum: number
  setQuestionNum: (num: number) => void
  setEvaluateFlag: (flag: boolean) => void
  setFile1: (file: string | null) => void
  setFile2: (file: string | null) => void
  setFile3: (file: string | null) => void
}

export const Question = ({
  questionNum,
  setQuestionNum,
  setEvaluateFlag,
  setFile1,
  setFile2,
  setFile3,
}: QuestionProps) => {
  const questionnaire = [
    'あなたのお名前は?',
    'あなたの出身は?',
    'あなたの好きな食べ物は？',
  ]

  const handleNextQuestion = () => {
    if (questionNum === 0) {
      setFile1('file1')
    } else if (questionNum === 1) {
      setFile2('file2')
    }

    setQuestionNum(questionNum + 1)
  }

  const handleEvaluate = () => {
    setFile3('file3')
    setEvaluateFlag(true)
  }

  return (
    <>
      <h2>質問{questionNum + 1}</h2>
      <div>{questionnaire[questionNum]}</div>
      {questionNum === 2 ? (
        <Button onClick={handleEvaluate}>評価する</Button>
      ) : (
        <Button onClick={handleNextQuestion}>次の質問へ</Button>
      )}
    </>
  )
}

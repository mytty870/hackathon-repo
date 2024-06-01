type EvaluationProps = {
  file1: string | null
  file2: string | null
  file3: string | null
}
export const Evaluation = ({ file1, file2, file3 }: EvaluationProps) => {
  return (
    <div>
      <h1>評価</h1>
      <div>file1: {file1}</div>
      <div>file2: {file2}</div>
      <div>file3: {file3}</div>
    </div>
  )
}

import { Textarea, Button } from '@nextui-org/react'

export const EsInput = () => {
  const questionList = [
    '学業や研究室などで取り組んだ内容',
    '自己PR',
    '学生時代に最も打ち込んだこと',
  ]

  return (
    <>
      <h1 className="p-3 text-center ">ES添削</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-[70%] rounded-lg border border-gray-300 bg-white p-3 text-center shadow-md">
          {questionList.map((question, index) => (
            <div key={index}>
              <h1>質問{index + 1}</h1>
              <p>{question}</p>
              <div className="mb-4 flex items-center justify-center">
                <Textarea
                  // label="Description"
                  variant="bordered"
                  // placeholder="Enter your description"
                  disableAnimation
                  disableAutosize
                  classNames={{
                    base: 'w-full',
                    input: 'resize-y min-h-[150px]',
                  }}
                />
              </div>
            </div>
          ))}
          <Button color="primary" variant="solid">
            添削する
          </Button>
        </div>
      </div>
    </>
  )
}

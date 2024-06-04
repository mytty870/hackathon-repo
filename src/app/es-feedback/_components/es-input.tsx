'use client'
import React, { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea, Button } from '@nextui-org/react'

const schema = z.object({
  answer1: z
    .string()
    .min(1, '入力は必須です')
    .max(1000, '400文字以内で入力してください'),
  answer2: z
    .string()
    .min(1, '入力は必須です')
    .max(1000, '400文字以内で入力してください'),
  answer3: z
    .string()
    .min(1, '入力は必須です')
    .max(1000, '400文字以内で入力してください'),
})

type FormValues = z.infer<typeof schema>

export const EsInput: React.FC = () => {
  const questionList = [
    { id: 'answer1', qNum: 1, question: '学業や研究室などで取り組んだ内容' },
    { id: 'answer2', qNum: 2, question: '自己PR' },
    { id: 'answer3', qNum: 3, question: '学生時代に最も打ち込んだこと' },
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      answer1: '',
      answer2: '',
      answer3: '',
    },
  })

  const isFieldEmptyOrHasError = (fieldId: keyof FormValues) => {
    return !dirtyFields[fieldId] || errors[fieldId]
  }

  const [data, setData] = useState(null)

  const isSubmitDisabled = questionList.some(({ id }) =>
    isFieldEmptyOrHasError(id as keyof FormValues),
  )

  // const onSubmit: SubmitHandler<FormValues> = data => {
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    setIsSubmitting(true)
    const texts = [data.answer1, data.answer2, data.answer3]

    try {
      const response = await fetch('http://localhost:8080/es_feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texts }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      setData(result)
      setIsSubmitting(false)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <h2 className="p-3 text-center text-3xl">ES添削</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <div className="space-y-4 rounded-lg border border-gray-300 bg-white p-3 text-center shadow-md md:w-[70%]">
          {questionList.map(({ id, question, qNum }) => (
            <div key={id} className="space-y-4">
              <h3 className="text-xl">質問{qNum}</h3>
              <p>{question}</p>
              <div className="mb-4 items-center justify-center">
                <Controller
                  name={id as keyof FormValues}
                  control={control}
                  render={({ field }) => (
                    <>
                      <Textarea
                        {...field}
                        variant="bordered"
                        disableAnimation
                        disableAutosize
                        isInvalid={!!errors[id as keyof FormValues]}
                        errorMessage={errors[id as keyof FormValues]?.message}
                        classNames={{
                          input: 'resize-y min-h-[150px]',
                          errorMessage: 'text-red-500 text-lg',
                        }}
                      />
                    </>
                  )}
                />
              </div>
            </div>
          ))}
          <Button
            type="submit"
            color="primary"
            variant="solid"
            isDisabled={isSubmitDisabled || isSubmitting}
            isLoading={isSubmitting}
          >
            添削する
          </Button>
        </div>
      </form>
      {data && <>aa</>}
    </>
  )
}

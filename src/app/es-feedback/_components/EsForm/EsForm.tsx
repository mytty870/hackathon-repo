/* eslint-disable */
'use client'
import React, { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea, Button } from '@nextui-org/react'
import { Overview } from './Overview'
// import { dummyResult } from './constants'

const schema = z.object({
  answer1: z
    .string()
    .min(1, '入力は必須です')
    .max(400, '400文字以内で入力してください'),
  answer2: z
    .string()
    .min(1, '入力は必須です')
    .max(400, '400文字以内で入力してください'),
  answer3: z
    .string()
    .min(1, '入力は必須です')
    .max(400, '400文字以内で入力してください'),
})

type FormValues = z.infer<typeof schema>

export const EsForm: React.FC = () => {
  const questionList = [
    { id: 'answer1', qNum: 1, question: '学業や研究室などで取り組んだ内容' },
    { id: 'answer2', qNum: 2, question: '自己PR' },
    { id: 'answer3', qNum: 3, question: '学生時代に最も打ち込んだこと' },
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<any[]>([])

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
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

  const isSubmitDisabled = questionList.some(({ id }) =>
    isFieldEmptyOrHasError(id as keyof FormValues),
  )

  const onSubmit: SubmitHandler<FormValues> = async formData => {
    setIsSubmitting(true)
    const texts = [formData.answer1, formData.answer2, formData.answer3]

    const formParams = new URLSearchParams()
    texts.forEach(text => formParams.append('texts', text))

    try {
      const response = await fetch('http://localhost:8080/es_feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseText = await response.json()
      const resultData = JSON.parse(responseText)
      setResult(resultData)
      // setResult(dummyResult)
      setIsSubmitting(false)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRest = () => {
    setResult([])
    setIsSubmitting(false)
    reset()
  }

  if (result.length === 0) {
    return (
      <>
        <Overview />
        <h2 className="p-3 text-center text-4xl underline">ES添削</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-4 p-4"
        >
          <div className="space-y-4 bg-white p-1 text-center text-xl md:w-[70%]">
            {questionList.map(({ id, question, qNum }) => (
              <div key={id} className="space-y-4">
                <h3 className="text-2xl">質問{qNum}</h3>
                <p>{question}</p>
                <div className="mb-4 items-center justify-center">
                  <Controller
                    name={id as keyof FormValues}
                    control={control}
                    render={({ field }) => (
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
      </>
    )
  }

  if (result.length > 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="p-3 text-center text-4xl underline mb-8">ES添削</h2>
        <h3 className="text-3xl text-center mb-4">評価結果</h3>
        {result.map((resultItem, index) => {
          const { input_text, response } = resultItem

          return (
            <div key={index} className="border p-4 my-4">
              <h3 className="text-2xl mb-2">入力された文章: {input_text}</h3>
              {response.error ? (
                <div className="text-red-500">
                  <p>{response.error.message}</p>
                </div>
              ) : (
                Object.keys(response).map(key => (
                  <div key={key} className="mb-4">
                    <h4 className="text-xl font-bold">テキスト {key}</h4>
                    <p>
                      <strong>添削前文章:</strong> {response[key].添削前文章}
                    </p>
                    <p>
                      <strong>添削後文章:</strong>{' '}
                      {response[key].添削後文章 ||
                        '（添削後の文章はありません）'}
                    </p>
                    <p>
                      <strong>添削理由:</strong> {response[key].添削理由}
                    </p>
                  </div>
                ))
              )}
            </div>
          )
        })}
        <Button color="primary" onClick={handleRest}>
          もう一度試す
        </Button>
      </div>
    )
  }
}

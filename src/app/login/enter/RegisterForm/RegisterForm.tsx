'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input, Select, Button, Spacer, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export const industryItem = [
  { key: 'ENGINEERING', label: 'エンジニア' },
  { key: 'BUSINESS', label: 'ビジネス' },
]

const schema = z.object({
  userName: z
    .string()
    .min(1, 'ユーザー名を入力してください')
    .max(15, 'ユーザー名は15文字以内で入力してください'),
  industry: z
    .enum(['ENGINEERING', 'BUSINESS'])
    .refine(value => !!value, { message: '業種を選択してください' }),
})

type FormData = z.infer<typeof schema>

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })
  const router = useRouter()

  const onSubmit: SubmitHandler<FormData> = async values => {
    setLoading(true)
    // フォームデータをサーバーに送信する処理をここに追加

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        router.push('/')
      } else {
        const errorData = await response.json()
        console.error(
          'Failed to update user:',
          errorData.message,
          errorData.error,
        )
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error)
    } finally {
      setLoading(false)
    }
  }

  const isSubmitDisabled = !isDirty || !isValid

  return (
    <div className="flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-8 shadow-md"
      >
        <Input
          {...register('userName')}
          placeholder="ユーザー名"
          label="ユーザー名"
          labelPlacement="outside"
        />
        {errors.userName && (
          <span className="text-red-500">{errors.userName.message}</span>
        )}
        <Spacer y={1.5} />
        <Select
          {...register('industry')}
          label="興味がある業種"
          placeholder="業種を選択して下さい"
          labelPlacement="outside"
          disableSelectorIconRotation
          selectorIcon={
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              role="presentation"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="1em"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          }
        >
          {industryItem.map(item => (
            <SelectItem value={item.key} key={item.key}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        {errors.industry && (
          <span className="text-red-500">{errors.industry.message}</span>
        )}
        <Spacer y={3.5} />
        <div style={{ textAlign: 'right' }}>
          <Button
            isLoading={loading}
            isDisabled={isSubmitDisabled}
            type="submit"
            color="primary"
          >
            更新
          </Button>
        </div>

        <Spacer y={0.5} />
      </form>
    </div>
  )
}

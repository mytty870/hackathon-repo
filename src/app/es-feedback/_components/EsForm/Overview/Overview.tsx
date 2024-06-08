'use client'
import React from 'react'
import { Avatar, Accordion, AccordionItem, Image } from '@nextui-org/react'

export const Overview = () => {
  const evaluationItems = [
    {
      title: '■文章の構成',
      description:
        '序論、本論、結論の明確さ: 文章が明確な序論、本論、結論の構成を持っているか。段落分けの適切さ: 各段落が一つのテーマに集中しており、適切に段落分けされているか。',
    },
    {
      title: '■内容の具体性',
      description:
        '具体例の使用: 主張を裏付ける具体的なエピソードやデータが使用されているか。詳細な説明: 抽象的な表現ではなく、具体的な言葉を用いて説明されているか。',
    },
    {
      title: '■論理性',
      description:
        '一貫した論理: 文章全体が一貫した論理に基づいて書かれているか。論理の飛躍がないか: 論理の飛躍や矛盾がないか。',
    },
    {
      title: '■文法と語法',
      description:
        '正しい文法の使用: 文法的な誤りがないか。適切な語彙の使用: 語彙の選択が適切であり、意味が明確に伝わるか。',
    },
    {
      title: '■敬語の使い方',
      description:
        '敬語の正確な使用: 敬語、謙譲語、丁寧語が正しく使い分けられているか。二重敬語の回避: 二重敬語が使用されていないか。',
    },
    {
      title: '■一人称の統一',
      description:
        '一貫した一人称: 一人称が一貫しているか。「私」、「僕」、「俺」などが混在していないか。適切な一人称: ビジネス文書として「私」が使用されているか。',
    },
    {
      title: '■言葉の使い方',
      description:
        '具体的な表現: 抽象的な言い方を避け、具体的な言葉を使っているか。明確な表現: 肯定や否定のどちらにも受け取れる言葉を使っていないか。適切な表現: 「こちら」、「あちら」などの曖昧な言葉を使わずに、具体的な対象を明確に述べているか。',
    },
    {
      title: '■説得力',
      description:
        '強い主張: 説得力のある主張が行われているか。根拠の提示: 主張を裏付ける根拠やエピソードが適切に提示されているか。',
    },
    {
      title: '■読みやすさ',
      description:
        '文章の流れ: 文章がスムーズに読み進められるか。簡潔さ: 冗長な表現を避け、簡潔に書かれているか。',
    },
  ]

  return (
    <div className="mx-auto max-w-screen-lg p-4 md:p-8">
      <h1 className="mb-8 text-center text-xl font-bold md:text-2xl">
        『ES添削AI』の特徴
      </h1>
      <div className="mb-16 flex flex-row gap-8 text-center">
        <div className="flex-1">
          <Avatar src="/confirmation.svg" size="lg" className="mx-auto" />
          <p className="mt-4">一文ごとの添削内容が確認できる</p>
        </div>
        <div className="flex-1">
          <Avatar src="/ai.svg" size="lg" className="mx-auto" />
          <p className="mt-4">最新のAIによる評価</p>
        </div>
        <div className="flex-1">
          <Avatar src="/rireki.svg" size="lg" className="mx-auto" />
          <p className="mt-4">添削理由が分かる</p>
        </div>
      </div>
      <h2 className="mb-8 text-center text-lg font-semibold md:text-xl">
        9つの評価項目で評価
      </h2>
      <div className="mb-16 flex flex-col gap-8 md:flex-row">
        <Accordion className="flex-1">
          {evaluationItems.map((item, index) => (
            <AccordionItem
              className="text-left"
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              <p>{item.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex-1">
          <div className="h-full flex-1 items-center justify-center p-4 ">
            <Image
              className="mb-4 rounded-lg border-4 border-gray-500"
              width={700}
              height={600}
              src="/es-full.jpeg"
            />
            <Image
              className="rounded-lg border-4 border-gray-500"
              width={700}
              height={600}
              src="/es-full2.jpeg"
            />
          </div>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  )
}

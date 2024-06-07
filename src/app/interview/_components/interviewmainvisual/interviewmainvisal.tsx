// 'use client'
// import React from 'react'
// import { Button, Avatar } from '@nextui-org/react'
// import Link from 'next/link'

// export const InterviewMainvisal = () => {
//   return (
//     <div className="mx-auto max-w-screen-lg p-4 md:p-8">
//       <h1 className="mb-8 text-center text-xl font-bold md:text-2xl">
//         『就活面接対策AI』の特徴
//       </h1>
//       <div className="mb-16 flex flex-row gap-8 text-center">
//         <div className="flex-1">
//           <Avatar src="/mic.svg" size="lg" className="mx-auto" />
//           <p className="mt-4">音声で答えられる</p>
//         </div>
//         <div className="flex-1">
//           <Avatar src="/ai.svg" size="lg" className="mx-auto" />
//           <p className="mt-4">最新のAIによる評価</p>
//         </div>
//         <div className="flex-1">
//           <Avatar src="/rireki.svg" size="lg" className="mx-auto" />
//           <p className="mt-4">履歴で前回の結果を確認</p>
//         </div>
//       </div>
//       <h2 className="mb-8 text-center text-lg font-semibold md:text-xl">
//         5つの評価項目で評価
//       </h2>
//       <div className="mb-16 flex flex-col gap-8 md:flex-row">
//         <div className="flex-1 space-y-8">
//           <div className="text-left">
//             <h3 className="mb-2 font-medium md:text-lg">■口癖の評価</h3>
//             <p>
//               よくある質問に音声を分析し、適切なフィードバックを提供します。
//             </p>
//           </div>
//           <div className="text-left">
//             <h3 className="mb-2 font-medium md:text-lg">■一人称の統一</h3>
//             <p>一人称の使い方が一貫しているかを評価し、改善点を指摘します。</p>
//           </div>
//           <div className="text-left">
//             <h3 className="mb-2 font-medium md:text-lg">■敬語の使用</h3>
//             <p>敬語の使い方を評価し、適切な使い方をフィードバックします。</p>
//           </div>
//           <div className="text-left">
//             <h3 className="mb-2 font-medium md:text-lg">■論理性の評価</h3>
//             <p>回答の論理性を評価し、論理的な話し方をアドバイスします。</p>
//           </div>
//           <div className="text-left">
//             <h3 className="text-md mb-2 font-medium md:text-lg">
//               ■言葉の使い方
//             </h3>
//             <p>言葉の選び方を評価し、より良い表現方法を提案します。</p>
//           </div>
//         </div>
//         <div className="flex-1">
//           <div className="flex h-full items-center justify-center bg-gray-200 p-4">
//             {/* ここにグラフを挿入します */}
//             <p className="text-center">ここにグラフが入ります</p>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <Link href="/interview/practice">
//           <Button className="h-[70px] bg-blue-400 px-8 py-4 text-lg text-white hover:bg-blue-600">
//             AIによる面接対策を試す
//           </Button>
//         </Link>
//       </div>
//     </div>
//   )
// }

'use client'
import React from 'react'
import { Button, Avatar } from '@nextui-org/react'
import Link from 'next/link'

export const InterviewMainvisal = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-4 md:p-8">
      <h1 className="mb-8 text-center text-xl font-bold md:text-2xl">
        『就活面接対策AI』の特徴
      </h1>
      <div className="mb-16 flex flex-row gap-8 text-center">
        <div className="flex-1">
          <Avatar src="/mic.svg" size="lg" className="mx-auto" />
          <p className="mt-4">音声で答えられる</p>
        </div>
        <div className="flex-1">
          <Avatar src="/ai.svg" size="lg" className="mx-auto" />
          <p className="mt-4">最新のAIによる評価</p>
        </div>
        <div className="flex-1">
          <Avatar src="/rireki.svg" size="lg" className="mx-auto" />
          <p className="mt-4">履歴で前回の結果を確認</p>
        </div>
      </div>
      <h2 className="mb-8 text-center text-lg font-semibold md:text-xl">
        5つの評価項目で評価
      </h2>
      <div className="mb-16 flex flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-8">
          <div className="text-left">
            <h3 className="mb-2 font-medium md:text-lg">■口癖の評価</h3>
            <p>
              よくある質問に音声を分析し、適切なフィードバックを提供します。
            </p>
          </div>
          <div className="text-left">
            <h3 className="mb-2 font-medium md:text-lg">■一人称の統一</h3>
            <p>一人称の使い方が一貫しているかを評価し、改善点を指摘します。</p>
          </div>
          <div className="text-left">
            <h3 className="mb-2 font-medium md:text-lg">■敬語の使用</h3>
            <p>敬語の使い方を評価し、適切な使い方をフィードバックします。</p>
          </div>
          <div className="text-left">
            <h3 className="mb-2 font-medium md:text-lg">■論理性の評価</h3>
            <p>回答の論理性を評価し、論理的な話し方をアドバイスします。</p>
          </div>
          <div className="text-left">
            <h3 className="text-md mb-2 font-medium md:text-lg">
              ■言葉の使い方
            </h3>
            <p>言葉の選び方を評価し、より良い表現方法を提案します。</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex h-full items-center justify-center bg-gray-200 p-4">
            {/* ここにグラフを挿入します */}
            <p className="text-center">ここにグラフが入ります</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link href="/interview/practice">
          <Button className="h-[70px] bg-blue-400 px-8 py-4 text-lg text-white hover:bg-blue-600">
            AIによる面接対策を試す
          </Button>
        </Link>
      </div>
      <div className="mb-8 flex items-center justify-center">
        <p className="mt-4 text-left text-red-500">
          ※AIによる面接はログインが必要になっております。
        </p>
      </div>
    </div>
  )
}

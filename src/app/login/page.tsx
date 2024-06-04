import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { LoginButtonGroup } from './_components/LoginButonGroup'

export default async function Page() {
  const session = await getServerSession()

  if (session?.user && session.user.userName) {
    /**
     * 仮でルートにリダイレクトするように設定している
     */
    redirect('/interview-feedback')
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded bg-white p-6 shadow-md">
        <div className="w-1/2 p-4">
          <h1 className="mb-4 text-2xl font-bold">就活ＡＩにようこそ！</h1>
          <p className="mb-6">
            就活ＡＩは、就職活動をサポートするための最先端のサービスです。
            <br />
            添削ＡＩや面接対策ＡＩを利用して、あなたの履歴書やエントリーシートを最適化し、面接の練習を効果的に行うことができます。
            <br />
            さあ、就活ＡＩと共に、次のキャリアステップを踏み出しましょう。
          </p>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="mb-4 text-xl font-semibold">ログイン</h2>
          <LoginButtonGroup />
        </div>
      </div>
    </div>
  )
}

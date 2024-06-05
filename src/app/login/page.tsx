import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { LoginButtonGroup } from './LoginButonGroup'

export default async function Page() {
  const session = await getServerSession()

  if (session?.user) {
    // 仮でルートにリダイレクトするように設定している
    redirect('/interview-feedback')
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-5xl flex-col rounded border bg-white p-3 shadow-md md:flex-row">
        <div className="w-full p-4 md:w-1/2">
          <h1 className="mb-4 text-2xl font-bold">
            就活支援しまっせ にようこそ！
          </h1>
          <p className="mb-6">
            就活支援しまっせは、就職活動をサポートするサービスです。
          </p>
          <p className="mb-6">
            添削AIや面接対策AIを利用して、あなたの履歴書やESを最適化し、面接の練習を効果的に行うことができます。
          </p>
          <p className="mb-6">さあ、就活支援しまっせと共に、充実した就活を！</p>
        </div>
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-4 text-xl font-semibold">ログイン</h2>
          <LoginButtonGroup />
        </div>
      </div>
    </div>
  )
}

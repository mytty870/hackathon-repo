import { getServerSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { LoginButtonGroup } from './_components/LoginButonGroup'

export default async function Page() {
  const session = await getServerSession()

  if (session?.user && session.user.userName) {
    /**
     * 仮でルートにリダイレクトするように設定している
     */
    redirect('/interview')
  }
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-white md:bg-gray-100">
      <div className="flex w-full max-w-5xl flex-col rounded-none border-none bg-white p-3 shadow-none md:flex-row md:rounded-lg md:border md:shadow-md">
        <div className="w-full p-4 md:w-1/2">
          <h1 className="mb-4 text-2xl font-bold">
            <span className="text-3xl text-blue-600">就活支援しまっせ</span>{' '}
            にようこそ！
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
          <h2 className="mb-6 text-xl font-semibold">ログイン</h2>
          <LoginButtonGroup />
        </div>
      </div>
    </div>
  )
}

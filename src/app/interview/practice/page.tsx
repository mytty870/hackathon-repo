import { getServerSession } from '@/lib/auth'
import { Questions } from './_components/Questions'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession()

  if (!session || !session.user || !session.user.userName) {
    redirect('/login')
  }

  return (
    <>
      <h2 className="mt-5 p-3 text-center text-4xl underline">面接練習</h2>
      <div className="flex items-center justify-center p-4">
        <div className="rounded-lg border border-gray-300 bg-white p-4 text-center shadow-md md:w-[70%]">
          <Questions />
        </div>
      </div>
    </>
  )
}

// import { getServerSession } from '@/lib/auth'
import Link from 'next/link'
// import { prisma } from '@/lib/prisma'
export default async function Home() {
  // const session = await getServerSession()

  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: session?.user.id ?? '',
  //   },
  //   select: {
  //     userName: true,
  //     industry: true,
  //   },
  // })

  return (
    <>
      <div>ホーム</div>
      {/* {user?.userName && (
        <div>
          <div>ユーザー名: {user.userName}</div>
        </div>
      )}
      {user?.industry && (
        <div>
          <div>業界: {user.industry}</div>
        </div>
      )} */}
      <Link href="/interview-feedback">インタビューページへ</Link>
    </>
  )
}

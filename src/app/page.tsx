import Link from 'next/link'
export default async function Home() {
  return (
    <>
      <div>ホーム</div>
      <Link href="/interview">面接ページへ</Link>
    </>
  )
}

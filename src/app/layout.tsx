import type { Metadata } from 'next'
import { kiwi_maru } from './fonts'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/app/_components/Layout/Header'
import { getServerSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: '就活支援しまっせ',
  description: '就活支援しまっせは、就職活動をサポートするサービスです。',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={kiwi_maru.className}>
        <Providers>
          <Header session={session} />
          <main className="mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

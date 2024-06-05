import { redirect } from 'next/navigation'
import { RegisterForm } from './RegisterForm'
import { getServerSession } from '@/lib/auth'

export default async function Page() {
  const session = await getServerSession()
  if (!session || !session.user) {
    redirect('/login')
  }

  if (session.user.userName) {
    redirect('/')
  }

  return <RegisterForm />
}

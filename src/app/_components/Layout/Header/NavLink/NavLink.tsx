'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      // className={`text-blue-600 font-medium py-2 px-2 ${
      //   isActive ? 'border-b-4 border-blue-600' : 'border-b-4 border-transparent'
      // } hover:border-blue-600`}
      className={clsx(
        'p-2 font-medium text-blue-600',
        {
          'border-b-4 border-blue-600': isActive,
          'border-b-4 border-transparent': !isActive,
        },
        'hover:border-blue-600',
        className, // 親コンポーネントから渡されたclassNameをマージ
      )}
    >
      {children}
    </Link>
  )
}

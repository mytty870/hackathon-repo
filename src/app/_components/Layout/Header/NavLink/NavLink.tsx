'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MouseEventHandler, ReactNode } from 'react'
import clsx from 'clsx'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavLink = ({
  href,
  children,
  className,
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'p-2 font-medium text-blue-600',
        {
          'border-b-4 border-blue-600': isActive,
          'border-b-4 border-transparent': !isActive,
        },
        'hover:border-blue-600',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

'use client'

import {
  Button,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { NavLink } from './NavLink'
import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'

type HeaderProps = {
  session: Session | null
}

export const Header = ({ session }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const serviceItems = [
    { name: '面接練習', href: '/interview-feedback' },
    { name: 'ES添削', href: '/es-feedback' },
    { name: 'アドバイザー紹介', href: '/advisors' },
    { name: '内定者の声', href: '/voices' },
  ]

  return (
    <>
      <Navbar
        className="mb-6 bg-white py-2 shadow-lg sm:py-0"
        classNames={{
          wrapper: 'flex-col h-auto justify-start gap-1 px-0 max-w-full',
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center justify-between space-x-4">
            <h1 className="text-3xl font-semibold text-blue-600">就活AI</h1>
          </div>
          {session && session.user ? (
            <Button
              color="danger"
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            >
              ログアウト
            </Button>
          ) : (
            <Link href="/login">
              <Button color="primary">ログイン</Button>
            </Link>
          )}
          <NavbarContent justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="sm:hidden"
            />
          </NavbarContent>
        </div>
        <div
          className={`mt-2 hidden w-full border-t-3 border-blue-500 sm:block`}
        >
          <div className="container mx-auto flex justify-center gap-12 px-4 py-2">
            {serviceItems.map(item => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <NavbarMenu>
          {serviceItems.map(item => (
            <NavbarMenuItem className="mb-4" key={`${item.name}`}>
              <NavLink href={item.href} onClick={handleLinkClick}>
                {item.name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

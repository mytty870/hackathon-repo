/* eslint-disable */
'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
import { usePathname } from 'next/navigation'

export const Header = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathName = usePathname()

  const isLoginPath = pathName === '/login' || pathName === '/login/enter'

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleSignOut = () => {
    setIsMenuOpen(false)
    signOut({ callbackUrl: 'http://localhost:3000' })
  }

  const serviceItems = [
    { name: '面接練習', href: '/interview' },
    { name: 'ES添削', href: '/es-feedback' },
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
          <NavbarContent>
            <h1 className="text-3xl font-semibold text-blue-600">
              <Link href="/">就活AI</Link>
            </h1>
          </NavbarContent>
          <NavbarContent justify="end">
            {session && session.user && session.user.userName ? (
              <Dropdown className="hidden sm:block">
                <DropdownTrigger>
                  <Button
                    color="primary"
                    disableRipple={true}
                    className="hidden sm:block"
                  >
                    メニュー
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new" href="/mypage">
                    マイページ
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onClick={handleSignOut}
                  >
                    ログアウト
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              !isLoginPath && (
                <Link href="/login">
                  <Button color="primary" className="hidden sm:block">
                    ログイン
                  </Button>
                </Link>
              )
            )}
            {!isLoginPath && (
              <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className="sm:hidden"
              />
            )}
          </NavbarContent>
        </div>
        {!isLoginPath && (
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
        )}
        {!isLoginPath && (
          <NavbarMenu>
            {serviceItems.map(item => (
              <NavbarMenuItem className="py-2" key={`${item.name}`}>
                <NavLink href={item.href} onClick={handleLinkClick}>
                  {item.name}
                </NavLink>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem className="py-2 border-t-2">
              <NavLink href="mypage" onClick={handleLinkClick}>
                マイページ
              </NavLink>
            </NavbarMenuItem>
            {session && session.user && session.user.userName ? (
              <NavbarMenuItem className="py-2 border-t-2">
                <NavLink
                  href="#"
                  className="text-red-500"
                  onClick={handleSignOut}
                >
                  ログアウト
                </NavLink>
              </NavbarMenuItem>
            ) : (
              <NavbarMenuItem className="py-2 border-t-2">
                <NavLink href="/login" onClick={handleLinkClick}>
                  ログイン
                </NavLink>
              </NavbarMenuItem>
            )}
          </NavbarMenu>
        )}
      </Navbar>
    </>
  )
}

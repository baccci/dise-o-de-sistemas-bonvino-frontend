import React from 'react'
import { Logo } from '@components/Logo'
import Link from 'next/link'

interface HeaderProps {
  logoHref?: string
  accountSection?: boolean
}

export const Header: React.FC<HeaderProps> = ({ logoHref, accountSection }) => {
  const showAccountSection = accountSection ? 'show' : 'hidden'

  const AccountSection = {
    show: <HeaderAccountSection />,
    hidden: null
  }[showAccountSection]

  return (
    <header className='flex p-8 md:p-4 justify-between items-center h-auto md:h-[72px]'>
      <div className='flex gap-12'>
        <Logo href={logoHref} height={20}/>
        <Navigation />
      </div>
      {AccountSection}
    </header>
  )
}

const Navigation: React.FC = () => {
  return (
    <nav className='hidden sm:flex gap-2'>
      <Link href='/cellar-news'>Novedades</Link>
    </nav>
  )
}

const HeaderAccountSection: React.FC = () => {
  return null
}

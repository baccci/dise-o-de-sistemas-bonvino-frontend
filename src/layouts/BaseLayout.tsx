import React from 'react'
import { Header } from './Header'
import { Toaster } from 'sonner'
import { cn } from '@/utils/tailwindClassMerge'

interface BaseLayoutProps extends React.ComponentProps<'main'> {
 children: React.ReactNode
 logoHref?: string
 showAccountSection?: boolean
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, logoHref, className, showAccountSection = true, ...rest }) => {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <Header
        logoHref={logoHref}
        accountSection={showAccountSection}
      />
      <main className={cn('px-8 sm:px-4', className)} {...rest}>
        {children}
      </main>
      <Toaster position='bottom-center' />
    </div>
  )
}

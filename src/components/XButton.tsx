'use client'
import React from 'react'
import { IconX } from '@components/Icons/IconX'
import { cn } from '@utils/tailwindClassMerge'

export interface XButtonProps {
  func?: () => void
  className?: string
  width?: number
  color?: string
  stroke?: string
}

export const XButton: React.FC<XButtonProps> = ({
  func,
  className,
  width = '16',
  color = 'currentColor',
  stroke = '3'
}) => {
  return (
    <button
      className={cn(`
      [--bg-color:#F1F5F9] [--size:32px] [--quarter-size:calc(var(--size)/4*-1)]
      relative hover:after:content-[''] hover:after:bg-[var(--bg-color)] hover:after:w-[var(--size)] cursor-pointer text-slate-500 hover:after:animate-show z-[2] md:pt-0
      hover:after:h-[var(--size)] hover:after:absolute hover:after:top-[var(--quarter-size)] hover:after:left-[var(--quarter-size)] hover:after:z-[-1] hover:after:rounded-full`,
      className
      )}
      onClick={func}
      role='button'
      aria-label='close'
      type='button'
    >
      <IconX width={width} color={color} stroke={stroke} />
    </button>
  )
}

import { cn } from '@/utils/tailwindClassMerge'
import React from 'react'

interface LineProps extends React.ComponentProps<'div'> {
  className?: string
  text?: string
  [key: string]: unknown
}

export const Line: React.FC<LineProps> = ({
  className,
  text,
  ...rest
}) => {
  return (
    <div className={cn('h-[1px] bg-slate-200 my-3', className, { relative: text })} {...rest}>
      {text &&
        <span className='bg-white px-2 absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] text-slate-500 text-sm'>
          {text}
        </span>
      }
    </div>
  )
}

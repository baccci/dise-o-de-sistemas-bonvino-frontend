import { cn } from '@/utils/tailwindClassMerge'
import React from 'react'
import { useCarrouselContext } from './context'

export interface ItemProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
  itemIndex?: number
  className?: string
}

export const Item: React.FC<ItemProps> = ({
  children,
  className,
  itemIndex,
  ...rest
}) => {
  const itemWrapperRef = React.useRef<HTMLDivElement>(null)
  const { currentIndex, itemsClassname } = useCarrouselContext()
  const itemHeight = itemIndex === currentIndex ? 'auto' : '0'
  const trapFocus = itemIndex === currentIndex

  const trapFocusOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab' && trapFocus) {
      const rootElement = itemWrapperRef.current
      if (rootElement) {
        const filter = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        const focusableElements = rootElement.querySelectorAll<HTMLElement>(filter)
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]
        if (e.target === lastElement && !e.shiftKey) {
          e.preventDefault()
          firstElement.focus()
        } else if (e.target === firstElement && e.shiftKey) {
          e.preventDefault()
          lastElement.focus()
        }
      }
    }
  }

  return (
    <div
      className={cn('max-w-[100%] flex-grow-0 flex-shrink-0 basis-[100%]',
        itemsClassname,
        className
      )}
      style={{ height: itemHeight }}
      onKeyDown={trapFocusOnKeyDown}
      ref={itemWrapperRef}
      {...rest}
    >
      {children}
    </div>
  )
}

Item.displayName = 'Item'

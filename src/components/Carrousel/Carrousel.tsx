import React from 'react'
import { Item, ItemProps } from './Item'
import { cn } from '@utils/tailwindClassMerge'
import { Provider, useCarrousel } from './context'
import { injectIndexToChildren } from './helpers'

interface CarrouselProps extends React.ComponentProps<'div'> {
  index?: number
  className?: string
  itemsClassname?: string
  children: React.ReactNode
}

type CarrouselType = React.FC<CarrouselProps> & {
  Item: React.FC<ItemProps>
}

export const Carrousel: CarrouselType = ({
  children,
  className,
  index: currentIndex = 0,
  itemsClassname,
  ...rest
}) => {
  const carrouselContext = useCarrousel({ currentIndex, itemsClassname })
  const childrenWithIndex = injectIndexToChildren(children)

  return (
    <Provider value={carrouselContext}>
      <div className={cn('overflow-hidden', className)} {...rest}>
        <div
          className={'flex flex-nowrap transition-transform duration-200 ease-out py-1'}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {childrenWithIndex}
        </div>
      </div>
    </Provider>
  )
}

Carrousel.Item = Item

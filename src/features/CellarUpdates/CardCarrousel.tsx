import { Carrousel } from '@/components/Carrousel/Carrousel'
import React from 'react'
import { CellarUpdates } from './CellarUpdates'
import { useCellarsUpdatesContext } from './context'

type CardCarrouselProps = React.ComponentProps<'div'>

export const CardCarrousel: React.FC<CardCarrouselProps> = ({ children }) => {
  const { carrouselIndex } = useCellarsUpdatesContext()
  return (
    <Carrousel index={carrouselIndex}>
      <Carrousel.Item>
        {children}
      </Carrousel.Item>
      <Carrousel.Item>
        <CellarUpdates />
      </Carrousel.Item>
    </Carrousel>
  )
}

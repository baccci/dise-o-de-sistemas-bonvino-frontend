'use client'

import React from 'react'
import { Cellar } from '@/Models/Cellar'
import { CellarItem } from './CellarItem'

interface CellarListProps extends React.ComponentProps<'div'> {
  data: Cellar[] | undefined
}

export const CellarList: React.FC<CellarListProps> = ({ data }) => {
  if (!data) return null
  return (
    <>
      {data.map((cellar) => {
        return <CellarItem key={cellar.name} cellar={cellar} />
      })}
    </>
  )
}
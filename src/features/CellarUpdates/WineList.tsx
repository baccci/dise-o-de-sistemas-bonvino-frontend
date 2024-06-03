import { Wine } from '@/Models/Wine'
import Image from 'next/image'
import React from 'react'

interface WineListProps extends React.ComponentProps<'div'> {
  wines: Wine[] | undefined
}

export const WineList: React.FC<WineListProps> = ({ wines }) => {
  const wineCards = wines?.map((wine) => <WineCard key={wine.vintage} wine={wine} />)

  if (!wines) return null
  return wineCards
}

interface WineCardProps extends React.ComponentProps<'div'> {
  wine: Wine | undefined
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  const price = wine?.price.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  })

  if (!wine) return null
  return (
    <div key={wine.vintage} className='flex flex-col mt-2 border border-border rounded-lg p-2 h-[98px]'>
      <div className='flex gap-2'>
        <Image src={wine.labelImage} alt={wine.name} width={80} height={80} className='size-20 object-cover rounded-[6px]' />
        <div className='h-full flex-1 flex flex-col justify-between'>
          <div>
            <h3 className='font-medium text-base line-clamp-1'>{wine.name}</h3>
            <p className='text-sm text-slate-700'>
              Añada:  {wine.vintage}
            </p>
          </div>
          <p className='text-sm text-slate-700 mt-auto'>Precio: <span className='font-semibold text-dark'>{price}</span></p>
        </div>
      </div>
    </div>
  )
}

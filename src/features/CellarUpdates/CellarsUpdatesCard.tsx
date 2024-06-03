'use client'

import React from 'react'
import { Button } from '@/components/Button'
import { IconReload } from '@/components/Icons/IconReload'
import { Skeleton } from '@/components/Skeleton'
import { CellarList } from './CellarList'
import { Provider, useCellarsUpdates } from './context'
import { DATA_STATES } from './constants'
import { CardCarrousel } from './CardCarrousel'

type CellarsUpdatesCardProps = React.ComponentProps<'div'>

export const CellarsUpdatesCard: React.FC<CellarsUpdatesCardProps> = () => {
  const context = useCellarsUpdates()
  const { data, dataState, fetch } = context

  const CellarData = {
    [DATA_STATES.empty]: null,
    [DATA_STATES.loading]: <Skeleton className='h-8 w-full '/>,
    [DATA_STATES.fulfilled]: <CellarList data={data} />
  }[dataState]

  const descriptionText = {
    [DATA_STATES.empty]: 'Actualmente no hay ninguna bodega con actualizaciones descargada.',
    [DATA_STATES.loading]: null,
    [DATA_STATES.fulfilled]: 'Bodegas actualizadas.'
  }[dataState]

  const handleFetchCellarUpdates = () => fetch()

  return (
    <Provider value={context}>
      <div className='p-4 border border-border mt-12 rounded-xl sm:max-w-[350px] mx-auto w-full'>
        <CardCarrousel>
          <header>
            <h2 className='font-semibold'>Lista de bodegas</h2>
            <p className='text-slate-800 text-sm'>{descriptionText}</p>
          </header>
          <main className='mt-6'>
            {CellarData}
          </main>
          <footer className='mt-6'>
            <Button
              className='w-full flex gap-2 font-medium flex-wrap'
              size={'lg'}
              variant={'primary'}
              onClick={handleFetchCellarUpdates}
            >
              <IconReload width={16}/>
              Importar actualizaciones
            </Button>
          </footer>
        </CardCarrousel>
      </div>
    </Provider>
  )
}

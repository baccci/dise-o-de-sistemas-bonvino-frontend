'use client'

import { Button } from '@/components/Button'
import { Cellar } from '@/Models/Cellar'
import { useCellarsUpdatesContext } from './context'

interface CellarItemProps {
  cellar: Cellar
}

export const CellarItem: React.FC<CellarItemProps> = ({ cellar }) => {
  const { setSelectedCellar } = useCellarsUpdatesContext()

  const handleSelectCellar = () => {
    setSelectedCellar(cellar.name)
  }

  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex flex-col'>
        <h3 className='font-medium text-base'>{cellar.name}</h3>
        <p className='text-sm text-slate-700'>Actualizado el {cellar.updatedAt.toLocaleDateString()}</p>
      </div>
      <Button
        variant={'ghost'}
        onClick={handleSelectCellar}
      >
        Importar
      </Button>
    </div>
  )
}
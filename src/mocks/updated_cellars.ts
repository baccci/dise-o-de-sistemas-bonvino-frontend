import { Cellar } from '@/Models/Cellar'
import { storedCellars } from './stored_cellars'

const newCellars = storedCellars.map(cellar => {
  const newCellar = new Cellar({
    name: cellar.name,
    history: cellar.history,
    description: cellar.description,
    coordinates: cellar.coordinates,
    updatedAt: cellar.updatedAt,
    updatePeriod: cellar.updatePeriod
  })
  return newCellar
})

newCellars[0].updateDate(new Date('2024-05-08'))
newCellars[4].updateDate(new Date('2024-05-12'))
newCellars[7].updateDate(new Date('2024-05-22'))
newCellars[9].updateDate(new Date('2024-05-02'))

export const updatedCellars = newCellars
import { CELLAR_API_DELAY_TIME } from '@/constants/delays'
import { updatedCellars } from '@/mocks/updated_cellars'
import { Cellar } from '@/Models/Cellar'

export default async function getExternalCellar(): Promise<Cellar[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(updatedCellars)
    }, CELLAR_API_DELAY_TIME)
  })
}
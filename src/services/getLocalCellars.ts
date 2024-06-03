import { CELLAR_API_DELAY_TIME } from '@/constants/delays'
import { storedCellars } from '@/mocks/stored_cellars'
import { Cellar } from '@/Models/Cellar'

export default async function getLocalCellars(): Promise<Cellar[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(storedCellars)
    }, CELLAR_API_DELAY_TIME)
  })
}
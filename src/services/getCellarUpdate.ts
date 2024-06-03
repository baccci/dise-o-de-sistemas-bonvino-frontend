import { CELLAR_API_DELAY_TIME } from '@/constants/delays'
import { CellarUpdate, getCellarUpdates } from '@/mocks/cellar_updates'
import { updateCellar } from '@/mocks/stored_cellars'

export default async function getCellarUpdate(cellarName: string): Promise<CellarUpdate | undefined> {
  if (!cellarName) return undefined

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cellarUpdate = getCellarUpdates(cellarName)

      if (!cellarName) {
        reject(new Error('Error al obtener la bodega'))
      }

      updateCellar(cellarName)
      resolve(cellarUpdate)
    }, CELLAR_API_DELAY_TIME)
  })
}
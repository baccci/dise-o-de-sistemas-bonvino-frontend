import getExternalCellar from './getExternalCellars'
import getLocalCellars from './getLocalCellars'

export default async function getUpdatedCellars() {
  try {
    const localCellars = await getLocalCellars()
    const externalCellars = await getExternalCellar()

    const cellarUpdates = externalCellars.filter((externalCellar, index) => {
      return externalCellar.updatedAt.getTime() > localCellars[index].updatedAt.getTime()
    })

    return cellarUpdates
  } catch {
    throw new Error('Error al obtener las bodegas')
  }
}
import React from 'react'
import { DATA_STATES } from './constants'
import { useQuery } from '@tanstack/react-query'
import { createContext } from '@/utils/createContext'
import getUpdatedCellars from '@/services/getUpdatedCellars'
import { DataState } from './types'

export function useCellarsUpdates() {
  const {
    carrouselIndex,
    setSelectedCellar,
    selectedCellar,
    goBack
  } = useSelectedCellar()

  const { refetch, data, isLoading } = useQuery({
    queryKey: ['cellars-updates'],
    queryFn: () => getUpdatedCellars(),
    enabled: false
  })

  const dataFullfiled = data ? DATA_STATES.fulfilled : DATA_STATES.empty
  const dataState: DataState = isLoading ? DATA_STATES.loading : dataFullfiled

  return {
    data,
    goBack,
    dataState,
    fetch: refetch,
    carrouselIndex,
    selectedCellar,
    setSelectedCellar
  }
}

type CellarsUpdatesContextType = ReturnType<typeof useCellarsUpdates>

const cellarUpdatesContext = createContext<CellarsUpdatesContextType>()

export const Provider = cellarUpdatesContext[0]
export const useCellarsUpdatesContext = cellarUpdatesContext[1]

export const useSelectedCellar = () => {
  const [selectedCellar, setSelectedCellar] = React.useState<string | null>(null)
  const [carrouselIndex, setCarrouselIndex] = React.useState<number>(0)

  React.useLayoutEffect(() => {
    if (selectedCellar) {
      return setCarrouselIndex(1)
    }
    setCarrouselIndex(0)
  }, [selectedCellar])

  function goBack() {
    setSelectedCellar(null)
  }

  return {
    selectedCellar,
    carrouselIndex,
    setSelectedCellar,
    goBack
  }
}
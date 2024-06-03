import React from 'react'
import { useCellarsUpdatesContext } from './context'
import getCellarUpdate from '@/services/getCellarUpdate'
import { DataState } from './types'
import { DATA_STATES } from './constants'
import { Button } from '@/components/Button'
import { IconChevronLeft } from '@/components/Icons/IconChevronLeft'
import { Alert } from '@/components/Alert/Alert'
import { CellarUpdate } from '@/mocks/cellar_updates'
import { WineList } from './WineList'
import { Skeleton } from '@/components/Skeleton'
import { toast } from 'sonner'
import { NOTIFICATION_DELAY_TIME } from '@/constants/delays'
import { Cellar } from '@/Models/Cellar'
import {
  type QueryObserverResult,
  type RefetchOptions,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'

type CellarUpdatesProps = React.ComponentProps<'div'>

export const CellarUpdates: React.FC<CellarUpdatesProps> = () => {
  const { selectedCellar, goBack, fetch } = useCellarsUpdatesContext()

  const { data, dataState, isError, isFetched } = useUpdates(selectedCellar, fetch)
  const thereIsAnError = isError || (isFetched && !data)

  const UpdateList = {
    [DATA_STATES.empty]: null,
    [DATA_STATES.loading]: <LoadingSkeleton />,
    [DATA_STATES.fulfilled]: <WineUpdates data={data} />
  }[dataState]

  const handleGoBack = () => goBack()

  if (!selectedCellar) return null
  return (
    <>
      <header>
        <div className='flex gap-2 items-center'>
          <Button
            variant={'outline'}
            className='text-[#111] p-0 size-8 flex justify-center items-center'
            onClick={handleGoBack}
          >
            <IconChevronLeft width={16} />
          </Button>
          <h2 className='font-semibold'>{selectedCellar}</h2>
        </div>
        <p className='text-slate-700 mt-2 text-sm'>Estos lista de vinos se ha importado desde la bodega.</p>
      </header>
      <main>
        <Alert show={thereIsAnError}>
          No se pudo cargar la información de la bodega seleccionada.
        </Alert>
        {UpdateList}
      </main>
    </>
  )
}

function LoadingSkeleton() {
  return (
    <div className='flex flex-col gap-2 mt-4'>
      <Skeleton className='h-[98px] w-full'/>
      <Skeleton className='h-[98px] w-full'/>
      <Skeleton className='h-[98px] w-full'/>
    </div>
  )
}

function WineUpdates({ data }: { data: CellarUpdate | undefined }) {
  const { goBack } = useCellarsUpdatesContext()
  const thereAreNewWines = !!data?.new?.length
  const thereAreUpdatedWines = !!data?.updated?.length

  const handleGoBack = () => goBack()

  if (!data) return null
  return (
    <>
      {thereAreNewWines &&
        <div className='mt-4'>
          <h3 className='font-semibold'>Nuevos vinos</h3>
          <WineList wines={data.new} />
        </div>
      }
      {thereAreUpdatedWines &&
        <div className='mt-4'>
          <h3 className='font-semibold'>Vinos actualizados</h3>
          <WineList wines={data.updated} />
        </div>
      }
      <Button variant={'primary'} className='w-full mt-4' onClick={handleGoBack}>
        Aceptar
      </Button>
    </>
  )
}

function useUpdates(selectedCellar: string | null, fetch: (options?: RefetchOptions) => Promise<QueryObserverResult<Cellar[], Error>>) {
  const cellarName = selectedCellar ?? ''
  const queryClient = useQueryClient()

  const { data, isLoading, isFetched, isError } = useQuery({
    queryKey: ['cellar-update', cellarName],
    queryFn: () => getCellarUpdate(cellarName),
    enabled: !!cellarName
  })

  const dataFullfiled = data ? DATA_STATES.fulfilled : DATA_STATES.empty
  const dataState: DataState = isLoading ? DATA_STATES.loading : dataFullfiled

  React.useLayoutEffect(() => {
    if (selectedCellar && dataState === DATA_STATES.fulfilled) {
      queryClient.removeQueries({ queryKey: ['cellars-updates'] })
      fetch()
      setTimeout(() => {
        toast.info('Notificación push enviada con exito.')
      }, NOTIFICATION_DELAY_TIME)
    }
  }, [selectedCellar, dataState, queryClient, fetch])

  return {
    data,
    dataState,
    isFetched,
    isError
  }
}
import { CellarsUpdatesCard } from '@features/CellarUpdates/'

export default function News() {
  return (
    <div className='w-full flex flex-col items-center mt-8 sm:mt-24'>
      <h1 className='text-4xl font-bold sm:text-balance text-center'>Novedades de bodegas</h1>
      <p className='text-base mt-2 text-slate-600 text-balance sm:text-balance text-center'>Últimas novedades sobre vinos de las diferentes bodegas.</p>
      <CellarsUpdatesCard />
    </div>
  )
}
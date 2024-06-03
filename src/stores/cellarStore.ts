import { Cellar } from '@/Models/Cellar'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CellarStore {
  cellar: Cellar[]
  addCellar: (cellar: Cellar) => void
  updateCellar: (cellar: Cellar) => void
}

export const useCellarStore = create<CellarStore>()(
  persist((set) => ({
    cellar: [],

    addCellar: (cellar: Cellar) =>
      set((state) => ({ cellar: [...state.cellar, cellar] })),

    updateCellar: (newCellar: Cellar) =>
      set((state) => ({
        cellar: state.cellar.map((oldCellar) => {
          const cellarName = oldCellar.name
          const newCellarName = newCellar.name
          const isSameCellar = cellarName === newCellarName

          return isSameCellar ? newCellar : oldCellar
        })
      }))

  }), {
    name: 'cellar-storage'
  })
)
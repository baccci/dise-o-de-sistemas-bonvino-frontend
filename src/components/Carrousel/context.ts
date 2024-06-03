import { createContext } from '@utils/createContext'

interface CarrouselContextArgs {
  currentIndex: number
  itemsClassname?: string
}

export const useCarrousel = (args: CarrouselContextArgs) => args

export type SliderContextType = ReturnType<typeof useCarrousel>
const carrouselContext = createContext<SliderContextType>()
export const Provider = carrouselContext[0]
export const useCarrouselContext = carrouselContext[1]
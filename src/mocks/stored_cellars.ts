import { Cellar } from '@/Models/Cellar'

export const cellar1 = new Cellar({
  name: 'Haven de Viñedos',
  history: 'Establecido en 1875, Haven de Viñedos ha estado produciendo vinos finos durante más de un siglo.',
  description: 'Un viñedo pintoresco conocido por sus ricos vinos tintos y hermoso paisaje.',
  coordinates: '34.0522, -118.2437',
  updatedAt: new Date('2023-03-15'),
  updatePeriod: '3m'
})

export const cellar2 = new Cellar({
  name: 'Chateau Montelena',
  history: 'Fundado en 1882, Chateau Montelena es famoso por su exquisito Chardonnay.',
  description: 'Una bodega histórica que ofrece una amplia gama de vinos y una rica historia.',
  coordinates: '38.501, -122.472',
  updatedAt: new Date('2023-11-25'),
  updatePeriod: '6m'
})

export const cellar3 = new Cellar({
  name: 'Bodegas Silver Oak',
  history: 'Bodegas Silver Oak ha estado elaborando Cabernet Sauvignon excepcional desde 1972.',
  description: 'Famoso por sus vinos tintos de primera calidad y prácticas de vinificación sostenibles.',
  coordinates: '38.487, -122.417',
  updatedAt: new Date('2023-01-12'),
  updatePeriod: '4m'
})

export const cellar4 = new Cellar({
  name: 'Bodegas Stag’s Leap',
  history: 'Líder en la industria del vino del Valle de Napa desde 1970, conocida por su Cabernet Sauvignon.',
  description: 'Hogar de algunos de los mejores vinos del Valle de Napa, con un compromiso con la calidad.',
  coordinates: '38.405, -122.321',
  updatedAt: new Date('2023-05-08'),
  updatePeriod: '2m'
})

export const cellar5 = new Cellar({
  name: 'Bodega Opus One',
  history: 'La Bodega Opus One fue fundada en 1978 como una empresa conjunta entre Robert Mondavi y Baron Philippe de Rothschild.',
  description: 'Conocida por producir un único vino propio, una mezcla de varietales de Burdeos.',
  coordinates: '38.464, -122.419',
  updatedAt: new Date('2023-04-20'),
  updatePeriod: '5m'
})

export const cellar6 = new Cellar({
  name: 'Bodegas Robert Mondavi',
  history: 'Establecida en 1966, Bodegas Robert Mondavi ha sido pionera en la industria del vino del Valle de Napa.',
  description: 'Una bodega de renombre conocida por su innovación y compromiso con la calidad.',
  coordinates: '38.458, -122.421',
  updatedAt: new Date('2023-02-14'),
  updatePeriod: '3m'
})

export const cellar7 = new Cellar({
  name: 'Clos du Val',
  history: 'Fundada en 1972, Clos du Val ha estado produciendo vinos de clase mundial durante casi cinco décadas.',
  description: 'Un viñedo conocido por sus elegantes vinos y hermosa finca.',
  coordinates: '38.372, -122.341',
  updatedAt: new Date('2023-05-22'),
  updatePeriod: '6m'
})

export const cellar8 = new Cellar({
  name: 'Viñedos Duckhorn',
  history: 'Desde 1976, Viñedos Duckhorn ha sido líder en vinos finos estadounidenses.',
  description: 'Famoso por su excepcional Merlot y las impresionantes vistas del viñedo.',
  coordinates: '38.495, -122.456',
  updatedAt: new Date('2023-03-29'),
  updatePeriod: '4m'
})

export const cellar9 = new Cellar({
  name: 'Bodegas Rutherford Hill',
  history: 'Bodegas Rutherford Hill se ha dedicado a producir vinos premium desde 1972.',
  description: 'Famoso por su Merlot y su pintoresca ubicación en la ladera.',
  coordinates: '38.469, -122.422',
  updatedAt: new Date('2023-01-05'),
  updatePeriod: '2m'
})

export const cellar10 = new Cellar({
  name: 'Bodegas Cakebread',
  history: 'Establecida en 1973, Bodegas Cakebread es conocida por sus vinos excepcionales y su hospitalidad.',
  description: 'Una bodega familiar que produce una amplia gama de vinos de alta calidad.',
  coordinates: '38.485, -122.409',
  updatedAt: new Date('2023-04-10'),
  updatePeriod: '3m'
})

export const storedCellars = [cellar1, cellar2, cellar3, cellar4, cellar5, cellar6, cellar7, cellar8, cellar9, cellar10]

export function updateCellar(cellarName: string) {
  storedCellars.forEach(cellar => {
    if (cellar.name === cellarName) {
      cellar.updateDate(new Date())
    }
  })
}
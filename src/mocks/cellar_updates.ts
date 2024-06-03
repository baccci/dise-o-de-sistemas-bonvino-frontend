import { Wine } from '@/Models/Wine'

const wine1 = new Wine({
  vintage: '2018',
  updatedAt: new Date('2023-03-15'),
  labelImage: '/images/wine1.webp',
  name: 'Gran Reserva Malbec',
  cellarTestingNote: 'Notas de ciruela, mora y roble. Final persistente y taninos suaves.',
  price: 45.00
})

const wine2 = new Wine({
  vintage: '2019',
  updatedAt: new Date('2022-11-25'),
  labelImage: '/images/wine2.webp',
  name: 'Chardonnay Especial',
  cellarTestingNote: 'Aromas de manzana verde, pera y un toque de vainilla.',
  price: 30.00
})

const wine3 = new Wine({
  vintage: '2020',
  updatedAt: new Date('2023-01-12'),
  labelImage: '/images/wine3.webp',
  name: 'Cabernet Sauvignon Reserva',
  cellarTestingNote: 'Notas de cereza negra, cassis y un toque de especias.',
  price: 50.00
})

const wine4 = new Wine({
  vintage: '2017',
  updatedAt: new Date('2023-05-08'),
  labelImage: '/images/wine4.webp',
  name: 'Merlot Premium',
  cellarTestingNote: 'Aromas de frutos rojos, chocolate y un toque de roble.',
  price: 40.00
})

const wine5 = new Wine({
  vintage: '2016',
  updatedAt: new Date('2023-04-20'),
  labelImage: '/images/wine5.webp',
  name: 'Pinot Noir Clásico',
  cellarTestingNote: 'Notas de frambuesa, fresa y un toque de tierra.',
  price: 35.00
})

const wine6 = new Wine({
  vintage: '2015',
  updatedAt: new Date('2023-02-14'),
  labelImage: '/images/wine6.webp',
  name: 'Sauvignon Blanc Selección',
  cellarTestingNote: 'Aromas cítricos con toques de hierba y mineralidad.',
  price: 25.00
})

const wine7 = new Wine({
  vintage: '2018',
  updatedAt: new Date('2023-05-22'),
  labelImage: '/images/wine7.webp',
  name: 'Syrah Reserva',
  cellarTestingNote: 'Notas de ciruela, mora y un toque de pimienta negra.',
  price: 48.00
})

const wine8 = new Wine({
  vintage: '2019',
  updatedAt: new Date('2023-03-29'),
  labelImage: '/images/wine8.webp',
  name: 'Tempranillo Crianza',
  cellarTestingNote: 'Aromas de cereza, vainilla y un toque de cuero.',
  price: 42.00
})

const wine9 = new Wine({
  vintage: '2020',
  updatedAt: new Date('2023-01-05'),
  labelImage: '/images/wine9.webp',
  name: 'Zinfandel Especial',
  cellarTestingNote: 'Notas de frutos rojos, especias y un toque de chocolate.',
  price: 38.00
})

const wine10 = new Wine({
  vintage: '2017',
  updatedAt: new Date('2023-04-10'),
  labelImage: '/images/wine10.webp',
  name: 'Riesling Clásico',
  cellarTestingNote: 'Aromas de manzana verde, lima y un toque de miel.',
  price: 32.00
})

export type CellarUpdate = {
  new?: Wine[]
  updated?: Wine[]
  cellar: string
}

const update1: CellarUpdate = {
  new: [
    wine1,
    wine2
  ],
  updated: [
    wine3
  ],
  cellar: 'Haven de Viñedos'
}

const update2: CellarUpdate = {
  new: [
    wine4
  ],
  updated: [
    wine5
  ],
  cellar: 'Bodega Opus One'
}

const update3: CellarUpdate = {
  new: [
    wine6
  ],
  updated: [
    wine7
  ],
  cellar: 'Viñedos Duckhorn'
}

const update4: CellarUpdate = {
  new: [
    wine8
  ],
  updated: [
    wine9,
    wine10
  ],
  cellar: 'Bodegas Cakebread'
}

const updates = [
  update1,
  update2,
  update3,
  update4
]

export function getCellarUpdates(cellar: string) {
  return updates.find(update => update.cellar === cellar)
}
import { DATA_STATES } from './constants'

export type DataState = typeof DATA_STATES[keyof typeof DATA_STATES]
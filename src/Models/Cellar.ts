export interface CellarArgs {
  name: string
  history: string
  description: string
  coordinates: string
  updatedAt: Date
  updatePeriod: string
}

export class Cellar {
  #name: string
  #history: string
  #description: string
  #coordinates: string
  #updatedAt: Date
  #updatePeriod: string

  constructor({
    name,
    history,
    description,
    coordinates,
    updatedAt,
    updatePeriod
  }: CellarArgs) {
    this.#name = name
    this.#history = history
    this.#description = description
    this.#coordinates = coordinates
    this.#updatedAt = updatedAt
    this.#updatePeriod = updatePeriod
  }

  get name() {
    return this.#name
  }

  get history() {
    return this.#history
  }

  get description() {
    return this.#description
  }

  get coordinates() {
    return this.#coordinates
  }

  get updatedAt() {
    return this.#updatedAt
  }

  get updatePeriod() {
    return this.#updatePeriod
  }

  updateDate(updatedAt: Date) {
    this.#updatedAt = updatedAt
  }
}
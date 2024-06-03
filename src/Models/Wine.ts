interface WineArgs {
  vintage: string
  updatedAt: Date
  labelImage: string
  name: string
  cellarTestingNote: string
  price: number
}

export class Wine {
  #vintage: string
  #updatedAt: Date
  #labelImage: string
  #name: string
  #cellarTestingNote: string
  #price: number

  constructor({
    vintage,
    updatedAt,
    labelImage,
    name,
    cellarTestingNote,
    price
  }: WineArgs) {
    this.#vintage = vintage
    this.#updatedAt = updatedAt
    this.#labelImage = labelImage
    this.#name = name
    this.#cellarTestingNote = cellarTestingNote
    this.#price = price
  }

  get vintage() {
    return this.#vintage
  }

  get updatedAt() {
    return this.#updatedAt
  }

  get labelImage() {
    return this.#labelImage
  }

  get name() {
    return this.#name
  }

  get cellarTestingNote() {
    return this.#cellarTestingNote
  }

  get price() {
    return this.#price
  }

  updateDate(updatedAt: Date) {
    this.#updatedAt = updatedAt
  }
}
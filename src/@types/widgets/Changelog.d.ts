declare global {
  export type Entry = {
    uuid: string
    position: number
    type: string
    content: string
  }

  export type EntryTypesMapping = {
    [t: string]: {
      label: string
      status: string
    }
  }
}

export {}

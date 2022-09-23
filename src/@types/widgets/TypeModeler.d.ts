declare global {
  export type TableModelerEntry = {
    uuid: string
    position: number
    row: TableCell[]
  }

  export type TableModelerEntryPresetsMapping = {
    [t: string]: {
      label: string
      row: TableCell[]
    }
  }
}

export {}

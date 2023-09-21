declare global {
  export type TableModelerEntryPresetsMapping = {
    [t: string]: {
      label: string
      height: number
    }
  }

  export type TableModelerKeyPresetsMapping = {
    [t: string]: {
      label: string
    }
  }
}

export {}

declare global {
  export type ChangelogEntry = {
    uuid: string
    position: number
    type: string
    content: string
  }

  export type ChangelogEntryMapping = {
    [t: string]: {
      label: string
      status: string
    }
  }
}

export {}

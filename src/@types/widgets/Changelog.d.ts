declare global {
  export type ChangelogEntry = {
    uuid: string
    position: number
    type: string
    content: string
    isLinkVisible: boolean
    link: Link
  }

  export type ChangelogEntryMapping = {
    [t: string]: {
      label: string
      status: string
    }
  }
}

export {}

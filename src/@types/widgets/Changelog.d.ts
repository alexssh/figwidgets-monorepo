declare global {
  export type ChangelogEntry = {
    uuid: string
    position: number
    type: string
    isLinkVisible: boolean
    link: Link
    isNavigationLinkVisible: boolean
    navigationLink: NavigationLink
  }

  export type ChangelogChangeEntry = ChangelogEntry & {
    content: string
    label: string
  }

  export type ChangelogTitleEntry = ChecklistEntry & {
    title: string
    description: string
    isDescriptionVisible: boolean
  }

  export type ChangelogLabelEntry = {
    uuid: string
    position: number
    label: string
    variant: string
    color: HexCode
  }

  export type ChangelogEntryMapping = {
    [t: string]: {
      label: string
    }
  }
}

export {}

declare global {
  export type ChecklistEntry = {
    uuid: string
    position: number
    type: string
  }

  export type ChecklistCheckboxEntry = ChecklistEntry & {
    value: boolean
    title: string
    description: string
    isDescriptionVisible: boolean
    priority: number
    actor: string
    timestamp: string
    action: keyof ChecklistActionsMapping
    isLinkVisible: boolean
    link: Link
    isNavigationLinkVisible: boolean
    navigationLink: NavigationLink
  }

  export type ChecklistTitleEntry = ChecklistEntry & {
    value: boolean // type fix
    title: string
    description: string
    isDescriptionVisible: boolean
    priority: number // type fix
    actor?: string // type fix
    timestamp?: string // type fix
    action?: keyof ChecklistActionsMapping // type fix
    isLinkVisible: boolean
    link: Link
    isNavigationLinkVisible: boolean
    navigationLink: NavigationLink
  }

  export type ChecklistEntryMapping = {
    [t: string]: {
      label: string
    }
  }

  export type ChecklistActionsMapping = {
    [t: string]: {
      label: string
    }
  }
}

export {}

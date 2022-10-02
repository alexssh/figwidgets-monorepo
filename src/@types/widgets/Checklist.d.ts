declare global {
  export type ChecklistEntry = {
    uuid: string
    position: number
    type: string
  }

  export type ChecklistCheckboxEntry = ChecklistEntry & {
    value: boolean
    content: string
    actor: string
    timestamp: string
    action: keyof ChecklistActionsMapping
  }

  export type ChecklistTitleEntry = ChecklistEntry & {
    value?: boolean // type fix
    actor?: string // type fix
    timestamp?: string // type fix
    action?: keyof ChecklistActionsMapping // type fix
    content: string
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

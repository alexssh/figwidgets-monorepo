declare global {
  export type ChecklistEntry = {
    uuid: string
    position: number
    type: string
  }

  export type ChecklistCheckboxEntry = ChecklistEntry & {
    value: boolean
    content: string
  }

  export type ChecklistTitleEntry = ChecklistEntry & {
    value?: boolean // type fix
    content: string
  }

  export type ChecklistEntryMapping = {
    [t: string]: {
      label: string
    }
  }
}

export {}

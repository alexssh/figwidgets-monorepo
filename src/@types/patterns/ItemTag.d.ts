declare global {
  interface IItemTagProps {
    key?: string
    theme: string
    type: string
    contentBody: string
    placeholderBody: string
    contentTag: string
    disabled?: boolean
    link?: Link
    onEditEnd: (e: IItemTagOnEditEndEvent) => void
  }

  interface IItemTagOnEditEndEvent {
    property: string
    value: TextEditEvent
  }
}

export {}

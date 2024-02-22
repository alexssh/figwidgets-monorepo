declare global {
  interface IItemTagProps {
    key?: string
    theme: string
    tagLabel: string
    tagColor: string
    contentBody: string
    placeholderBody: string
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

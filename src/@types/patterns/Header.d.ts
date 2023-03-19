declare global {
  interface IHeaderProps {
    theme: string
    isTitleVisible: boolean
    title: string
    isDescriptionVisible: boolean
    description: string
    suffix?: FigmaDeclarativeNode
    disabled?: boolean
    link?: Link
    onEditEnd: (e: IItemHeaderOnEditEndEvent) => void
  }

  interface IItemHeaderOnEditEndEvent {
    property: string
    value: TextEditEvent
  }
}

export {}

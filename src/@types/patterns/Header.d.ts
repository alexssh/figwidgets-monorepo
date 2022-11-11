declare global {
  interface IHeaderProps {
    theme: string
    isTitleVisible: boolean
    title: string
    isDescriptionVisible: boolean
    description: string
    suffix?: FigmaDeclarativeNode
    disabled?: boolean
    onTitleEditEnd: (e: TextEditEvent) => void
    onDescriptionEditEnd: (e: TextEditEvent) => void
  }
}

export {}

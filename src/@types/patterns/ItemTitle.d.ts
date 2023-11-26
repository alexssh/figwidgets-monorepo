declare global {
  interface IItemTitleProps {
    key?: string
    theme: string
    contentTitle: string
    placeholderTitle: string
    isDescriptionVisible: boolean
    contentDescription: string
    placeholderDescription: string
    disabled?: boolean
    link?: Link
    navigationLink?: NavigationLink
    onNavigationClick?: () => void
    onEditEnd: (e: IItemTitleOnEditEndEvent) => void
  }

  interface IItemTitleOnEditEndEvent {
    property: string
    value: TextEditEvent
  }
}
export {}

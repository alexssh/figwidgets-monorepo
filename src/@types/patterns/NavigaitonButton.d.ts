declare global {
  interface INavigationButtonProps {
    key?: string
    theme: string
    contentTitle: string
    valid: boolean
    onClick: (e: WidgetClickEvent) => void
  }
}
export {}

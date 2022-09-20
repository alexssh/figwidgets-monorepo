declare global {
  interface IItemTitleProps {
    key?: string
    theme: string
    contentBody: string
    placeholderBody: string
    disabled?: boolean
    onEditEnd: (e: TextEditEvent) => void
  }
}
export {}

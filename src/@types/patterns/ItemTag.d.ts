declare global {
  interface IItemTagProps {
    key?: string
    theme: string
    type: string
    contentBody: string
    placeholderBody: string
    contentTag: string
    disabled?: boolean
    onEditEnd: (e: TextEditEvent) => void
  }
}
export {}

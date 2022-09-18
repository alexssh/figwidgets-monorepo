declare global {
  interface IItemTagProps {
    key?: string
    theme: string
    type: string
    contentBody: string
    placeholderBody: string
    contentTag: string
    disabled?: boolean
    onTypeChange: () => void
    onEditEnd: (e: TextEditEvent) => void
  }
}
export {}

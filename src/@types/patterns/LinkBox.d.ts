declare global {
  interface ILinkBoxProps {
    key?: string
    theme: string
    contentTitle: string
    placeholderTitle: string
    valid: boolean
    disabled?: boolean
    onEditEnd: (e: TextEditEvent) => void
  }
}
export {}

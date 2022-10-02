declare global {
  interface IItemCheckboxProps {
    key?: string
    theme: string
    value: boolean
    contentBody: string
    contentMeta?: string
    placeholderBody: string
    disabled?: boolean
    disabledCheckbox?: boolean
    onCheckboxChange: () => void
    onEditEnd: (e: TextEditEvent) => void
  }
}
export {}

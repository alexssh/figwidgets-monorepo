declare global {
  interface IItemCheckboxProps {
    key?: string
    theme: string
    value: boolean
    contentTitle: string
    isDescriptionVisible: boolean
    contentDescription: string
    contentMeta?: string
    placeholderTitle: string
    placeholderDescription: string
    disabled?: boolean
    disabledCheckbox?: boolean
    priority: number
    link?: Link
    onCheckboxChange: () => void
    onEditEnd: (e: IItemCheckboxOnEditEndEvent) => void
  }

  interface IItemCheckboxOnEditEndEvent {
    property: string
    value: TextEditEvent
  }
}
export {}

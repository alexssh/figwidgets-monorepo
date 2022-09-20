declare global {
  interface ICheckboxProps {
    theme: string
    value: boolean
    disabled?: boolean
    onClick: () => void
  }
}

export {}

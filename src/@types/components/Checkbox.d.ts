declare global {
  interface ICheckboxProps {
    theme: string
    size?: number
    value: boolean
    disabled?: boolean
    onClick: () => void
  }
}

export {}

declare global {
  interface ICheckboxProps {
    theme: string
    size?: number
    value: boolean
    disabled?: boolean
    priority: number
    onClick: () => void
  }
}

export {}

declare global {
  interface IButtonGhostProps {
    theme: string
    variant?: string
    size?: number
    content?: string
    glyph?: string
    disabled?: boolean
    onClick: () => void
  }
}

export {}

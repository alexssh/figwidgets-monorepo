declare global {
  interface IButtonGhostProps {
    theme: string
    content?: string
    glyph?: string
    disabled?: boolean
    onClick: () => void
  }
}

export {}

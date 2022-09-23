declare global {
  interface IInputGhostProps {
    theme: string
    variant: {
      typo: string
      txt: string
    }
    type?: 'wrap' | 'truncate' | 'multiline'
    content: string
    placeholder: string
    disabled?: boolean
    onEditEnd: (e: TextEditEvent) => void
    style?: {
      [p: string]: any
    }
  }
}

export {}

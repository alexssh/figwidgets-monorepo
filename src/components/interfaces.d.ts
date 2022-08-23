export interface ITagProps {
  colorTheme: string
  variant: string
  contentTitle: string
}

export interface IEntryItemProps {
  colorTheme: string
  type: string
  contentParagraph: string
  contentTagTitle: string
  onEditEnd: (e: TextEditEvent) => void
  onPositionChange: (e: IEntryItemPositionChangeEvent) => void
  onDelete: () => void
  actions: {
    up: boolean
    down: boolean
    delete: boolean
  }
}

export interface IEntryItemPositionChangeEvent {
  direction: 'up' | 'down'
}

export interface ITconProps {
  glyph: string
  fill: HexCode
}

export interface IButtonTconProps {
  colorTheme: string
  glyph: string
  disabled: boolean
  onClick: () => void
}

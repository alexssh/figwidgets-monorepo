declare global {
  interface IItemProps {
    key?: string
    theme: string
    children?: FigmaDeclarativeNode
    positionUp?: boolean
    positionDown?: boolean
    deleting?: boolean
    onPositionChange?: (e: IItemPositionChangeEvent) => void
    onDelete?: () => void
  }

  interface IItemPositionChangeEvent {
    direction: 'up' | 'down'
  }
}

export {}

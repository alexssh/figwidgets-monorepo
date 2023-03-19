declare global {
  interface IItemProps {
    key?: string
    theme: string
    children?: FigmaDeclarativeNode
    positionUp?: boolean
    positionDown?: boolean
    more?: boolean
    padding?: WidgetJSX.Padding
    hideHeightFix?: boolean
    onPositionChange?: (e: IItemPositionChangeEvent) => void
    onMore?: () => void
  }

  interface IItemPositionChangeEvent {
    direction: 'up' | 'down'
  }
}

export {}

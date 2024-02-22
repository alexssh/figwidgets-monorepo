declare global {
  type Tokens = {
    themes: {
      typo: {
        [t: string]: TextProps
      }
      txt: {
        [t: string]: {
          [t: string]: { [scheme: string]: TokenTxt }
        }
      }
      border: {
        [t: string]: { [scheme: string]: TokenBackground }
      }
      shadow: {
        [t: string]: { [scheme: string]: TokenShadow }
      }
      status: {
        [t: string]: {
          [scheme: string]: TokenBackground &
            TokenTxt & {
              border?: Partial<TokenBorder>
            }
        }
      }
      labels: {
        [t: string]: TokenBackground & TokenTxt & TokenPreview
      }
      radius: {
        [t: string]: TokenRadius
      }
      controls: {
        size: {
          [t: number]: TokenSize
        }
        radius: TokenRadius
        ghost: {
          [t: string]: { [scheme: string]: TokenBackground }
        }
        checkbox: {
          [t: string]: {
            [scheme: string]: Partial<TokenBackground> & {
              border?: Partial<TokenBorder>
            }
          }
        }
      }
      layer: {
        [t: string]: { [scheme: string]: TokenBackground }
      }
      layout: {
        [t: string]: TokenPadding
      }
    }
  }

  type TokenPreview = {
    preview: string
  }

  type TokenSize = number

  type TokenTxt = {
    color: HexCode | RGBA
  }

  type TokenBackground = {
    fill: HexCode | RGBA
  }

  type TokenBorder = {
    stroke: HexCode | RGBA
    strokeWidth: number
    strokeAlign: WidgetJSX.StrokeAlign
  }

  type TokenPadding = {
    vertical: number
    horizontal: number
  }

  type TokenRadius = {
    cornerRadius: number
  }

  type TokenShadow = {
    type: 'drop-shadow'
    color: RGBA
    offset: Vector
    blur: number
  }

  /* --- */

  export type TableCell = {
    title: string
    width: { [t: number]: WidgetJSX.AutolayoutSize }
    disabled: boolean
    tooltip: string
    content?: string
    icon?: string
    visible?: boolean
    style?: {
      [p: string]: any
    }
  }

  export type Link = {
    src: string
    valid: boolean
  }

  export type NavigationLink = {
    id: string
    layerName: string
    valid: boolean
  }
}

export {}

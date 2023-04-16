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
        container: {
          vertical: number
          horizontal: number
        }
        item: {
          vertical: number
          horizontal: number
        }
      }
    }
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
    width: 'fill-parent' | number
    disabled: boolean
    tooltip: string
    content?: string
    icon?: string
    style?: {
      [p: string]: any
    }
  }

  export type Link = {
    src: string
    valid: boolean
  }
}

export {}

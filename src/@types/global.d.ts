declare global {
  type Tokens = {
    themes: {
      [scheme: string]: {
        typo: {
          [t: string]: TextProps
        }
        txt: {
          [t: string]: {
            [t: string]: TokenTxt
          }
        }
        border: {
          [t: string]: TokenBackground
        }
        shadow: {
          [t: string]: TokenShadow
        }
        status: {
          [t: string]: TokenBackground & TokenTxt & Partial<TokenBorder>
        }
        radius: {
          [t: string]: TokenRadius
        }
        controls: {
          size: {
            [t: number]: TokenSize
          }
          ghost: {
            [t: string]: TokenBackground & TokenRadius & Partial<TokenBorder>
          }
          checkbox: {
            [t: string]: Partial<TokenBackground> & TokenRadius & Partial<TokenBorder>
          }
        }
        layer: {
          [t: string]: TokenBackground
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
  }

  type TokenSize = number

  type TokenTxt = {
    color: HexCode | RGBA
  }

  type TokenBackground = {
    fill: HexCode | RGBA
  }

  type TokenBorder = {
    border: {
      stroke: HexCode | RGBA
      strokeWidth: number
      strokeAlign: WidgetJSX.StrokeAlign
    }
  }

  type TokenRadius = {
    cornerRadius: number
  }

  type TokenPadding = WidgetJSX.Padding

  type TokenShadow = {
    type: 'drop-shadow'
    color: RGBA
    offset: Vector
    blur: number
  }
}

export {}

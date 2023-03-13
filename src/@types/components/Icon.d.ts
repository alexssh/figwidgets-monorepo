declare global {
  interface ITconProps {
    glyph: string
    color: HexCode | RGBA
    size?: number
  }

  type IIconGlyph = {
    [t: string]: (color: HexCode) => string
  }
}

export {}

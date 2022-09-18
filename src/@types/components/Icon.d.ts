declare global {
  interface ITconProps {
    glyph: string
    color: HexCode | RGBA
  }

  type IIconGlyph = {
    [t: string]: (color: HexCode) => string
  }
}

export {}

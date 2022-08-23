export type Tokens = {
  typo: { [t: string]: TokenTypo }
  colors: {
    [scheme: string]: {
      txt: { [t: string]: TokenTxt }
      border: { [t: string]: TokenBorder }
      status: { [t: string]: TokenStatus }
      state: { [t: string]: { [t: string]: TokenState } }
      background: { [t: string]: TokenBackground }
    }
  }
}

export type TokenTypo = TextProps

export type TokenTxt = {
  [t: string]: { fill: HexCode }
}

export type TokenBorder = {
  fill: HexCode
}

export type TokenBackground = {
  fill: HexCode
}

export type TokenStatus = {
  label: string
  tag: {
    fill: HexCode | RGBA
    stroke?: string
    strokeWidth?: number
  }
  title: {
    fill: string
  }
}

export type TokenState = {
  fill?: HexCode
  stroke?: HexCode
  opacity?: number
}

export type Entry = {
  uuid: string
  position: number
  type: string
  content: string
}

const FONT_FAMILY = 'Inter'

const COLOR_BLACK = '#000000'
const COLOR_WHITE = '#FFFFFF'

const COLOR_GREY_100 = '#EBEBEB'
const COLOR_GREY_200 = '#DDDDDD'
const COLOR_GREY_300 = '#B4B4B4'
const COLOR_GREY_400 = '#979797'
const COLOR_GREY_500 = '#777777'
const COLOR_GREY_600 = '#636363'
const COLOR_GREY_700 = '#545454'
const COLOR_GREY_800 = '#424242'
const COLOR_GREY_900 = '#252525'

const COLOR_GREEN_600 = '#29B95F'

const COLOR_BLUE_600 = '#277DFF'

const COLOR_PURPLE_600 = '#7522C5'

const COLOR_ORANGE_600 = '#F0783C'

const COLOR_RED_600 = '#F04B6A'

/* Color themes */

const tokens: Tokens = {
  themes: {
    light: {
      typo: {
        h4: {
          fontFamily: FONT_FAMILY,
          fontSize: 28,
          lineHeight: 34,
          fontWeight: 600
        },
        h5: {
          fontFamily: FONT_FAMILY,
          fontSize: 20,
          lineHeight: 26,
          fontWeight: 600
        },
        h6: {
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          lineHeight: 22,
          fontWeight: 600
        },
        p4: {
          fontFamily: FONT_FAMILY,
          fontSize: 18,
          lineHeight: 26,
          fontWeight: 400
        },
        p5: {
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          lineHeight: 23,
          fontWeight: 400
        },
        p6: {
          fontFamily: FONT_FAMILY,
          fontSize: 13,
          lineHeight: 16,
          fontWeight: 400
        },
        caption: {
          fontFamily: FONT_FAMILY,
          fontSize: 10,
          lineHeight: 16,
          fontWeight: 600,
          textCase: 'upper',
          letterSpacing: 1
        }
      },
      txt: {
        primary: {
          default: { color: COLOR_BLACK },
          inverted: { color: COLOR_WHITE },
          except: { color: COLOR_WHITE }
        },
        secondary: {
          default: { color: COLOR_GREY_500 }
        },
        minor: {
          default: { color: COLOR_GREY_300 }
        },
        link: {
          default: { color: COLOR_BLUE_600 }
        }
      },
      border: {
        divider: { fill: COLOR_GREY_200 }
      },
      shadow: {
        container: { type: 'drop-shadow', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 2 }, blur: 12 }
      },
      status: {
        success: { fill: COLOR_GREEN_600, color: COLOR_WHITE },
        warning: { fill: COLOR_ORANGE_600, color: COLOR_WHITE },
        error: { fill: COLOR_RED_600, color: COLOR_WHITE },
        primary: { fill: COLOR_BLUE_600, color: COLOR_WHITE },
        info: { fill: COLOR_PURPLE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_BLACK, color: COLOR_WHITE },
        light: {
          fill: { r: 0, g: 0, b: 0, a: 0 },
          color: COLOR_GREY_500,
          border: { stroke: COLOR_GREY_400, strokeWidth: 1, strokeAlign: 'inside' }
        },
        disabled: { fill: COLOR_GREY_400, color: COLOR_WHITE }
      },
      radius: {
        container: { cornerRadius: 8 },
        tag: { cornerRadius: 4 }
      },
      controls: {
        size: {
          200: 24,
          400: 32,
          600: 40
        },
        ghost: {
          default: { fill: { r: 0, g: 0, b: 0, a: 0 }, cornerRadius: 4 },
          hover: { fill: COLOR_GREY_100, cornerRadius: 4 },
          disabled: { fill: { r: 0, g: 0, b: 0, a: 0 }, cornerRadius: 4 }
        },
        checkbox: {
          default: {
            fill: COLOR_WHITE,
            border: { stroke: COLOR_GREY_500, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          active: {
            fill: COLOR_BLUE_600,
            border: { stroke: COLOR_BLUE_600, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          defaultDisabled: {
            fill: COLOR_WHITE,
            border: { stroke: COLOR_GREY_300, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          activeDisabled: {
            fill: COLOR_GREY_300,
            border: { stroke: COLOR_GREY_300, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          hover: {
            border: { stroke: COLOR_BLACK, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          }
        }
      },
      layer: {
        default: { fill: COLOR_WHITE },
        active: { fill: COLOR_BLUE_600 },
        disabled: { fill: COLOR_GREY_300 }
      },
      layout: {
        container: {
          vertical: 24,
          horizontal: 32
        },
        item: {
          vertical: 12,
          horizontal: 32
        }
      }
    },
    dark: {
      typo: {
        h4: {
          fontFamily: FONT_FAMILY,
          fontSize: 28,
          lineHeight: 34,
          fontWeight: 600
        },
        h5: {
          fontFamily: FONT_FAMILY,
          fontSize: 20,
          lineHeight: 26,
          fontWeight: 600
        },
        h6: {
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          lineHeight: 22,
          fontWeight: 600
        },
        p4: {
          fontFamily: FONT_FAMILY,
          fontSize: 18,
          lineHeight: 26,
          fontWeight: 400
        },
        p5: {
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          lineHeight: 23,
          fontWeight: 400
        },
        p6: {
          fontFamily: FONT_FAMILY,
          fontSize: 13,
          lineHeight: 16,
          fontWeight: 400
        },
        caption: {
          fontFamily: FONT_FAMILY,
          fontSize: 10,
          lineHeight: 16,
          fontWeight: 600,
          textCase: 'upper',
          letterSpacing: 1
        }
      },
      txt: {
        primary: {
          default: { color: COLOR_WHITE },
          inverted: { color: COLOR_BLACK },
          except: { color: COLOR_WHITE }
        },
        secondary: {
          default: { color: COLOR_GREY_400 }
        },
        minor: {
          default: { color: COLOR_GREY_700 }
        },
        link: {
          default: { color: COLOR_BLUE_600 }
        }
      },
      border: {
        divider: { fill: COLOR_GREY_800 }
      },
      shadow: {
        container: { type: 'drop-shadow', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 2 }, blur: 12 }
      },
      status: {
        success: { fill: COLOR_GREEN_600, color: COLOR_WHITE },
        warning: { fill: COLOR_ORANGE_600, color: COLOR_WHITE },
        error: { fill: COLOR_RED_600, color: COLOR_WHITE },
        primary: { fill: COLOR_BLUE_600, color: COLOR_WHITE },
        info: { fill: COLOR_PURPLE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_BLACK, color: COLOR_WHITE },
        light: {
          fill: { r: 0, g: 0, b: 0, a: 0 },
          color: COLOR_WHITE,
          border: { stroke: COLOR_GREY_200, strokeWidth: 1, strokeAlign: 'inside' }
        },
        disabled: { fill: COLOR_GREY_400, color: COLOR_WHITE }
      },
      radius: {
        container: { cornerRadius: 8 },
        tag: { cornerRadius: 4 }
      },
      controls: {
        size: {
          200: 24,
          400: 32,
          600: 40
        },
        ghost: {
          default: { fill: { r: 0, g: 0, b: 0, a: 0 }, cornerRadius: 4 },
          hover: { fill: COLOR_GREY_800, cornerRadius: 4 },
          disabled: { fill: { r: 0, g: 0, b: 0, a: 0 }, cornerRadius: 4 }
        },
        checkbox: {
          default: {
            fill: COLOR_GREY_900,
            border: { stroke: COLOR_GREY_400, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          active: {
            fill: COLOR_BLUE_600,
            border: { stroke: COLOR_BLUE_600, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          defaultDisabled: {
            fill: COLOR_GREY_900,
            border: { stroke: COLOR_GREY_700, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          activeDisabled: {
            fill: COLOR_GREY_700,
            border: { stroke: COLOR_GREY_700, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          },
          hover: {
            border: { stroke: COLOR_WHITE, strokeWidth: 1, strokeAlign: 'inside' },
            cornerRadius: 4
          }
        }
      },
      layer: {
        default: { fill: COLOR_GREY_900 },
        active: { fill: COLOR_BLUE_600 },
        disabled: { fill: COLOR_GREY_700 }
      },
      layout: {
        container: {
          vertical: 24,
          horizontal: 32
        },
        item: {
          vertical: 12,
          horizontal: 32
        }
      }
    }
  }
}

export default tokens

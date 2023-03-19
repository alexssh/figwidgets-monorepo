const FONT_FAMILY = 'Inter'

const COLOR_BLACK = '#000'
const COLOR_WHITE = '#FFF'

const COLOR_GREY_100 = '#EBEBEB'
const COLOR_GREY_200 = '#DDDDDD'
const COLOR_GREY_300 = '#B4B4B4'
const COLOR_GREY_400 = '#979797'
const COLOR_GREY_500 = '#777'
const COLOR_GREY_600 = '#636363'
const COLOR_GREY_700 = '#545454'
const COLOR_GREY_800 = '#424242'
const COLOR_GREY_900 = '#252525'

const COLOR_GREEN_600 = '#29B95F'

const COLOR_BLUE_600 = '#277DFF'

const COLOR_LIGHTBLUE_600 = '#00B6F0'
const COLOR_LIGHTBLUE_600_ALPHA = { r: 0, g: 0.713, b: 0.9411, a: 0.12 }

const COLOR_PURPLE_600 = '#7522C5'

const COLOR_YELLOW_600 = '#FAB020'
const COLOR_YELLOW_600_ALPHA = { r: 0.98, g: 0.704, b: 0.128, a: 0.12 }

const COLOR_ORANGE_600 = '#FF730E'

const COLOR_RED_600 = '#D20000'
const COLOR_RED_600_ALPHA = { r: 0.823, g: 0, b: 0, a: 0.12 }

/* Color themes */

const tokens: Tokens = {
  themes: {
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
        default: {
          light: { color: COLOR_BLACK },
          dark: { color: COLOR_WHITE }
        },
        inverted: {
          light: { color: COLOR_WHITE },
          dark: { color: COLOR_BLACK }
        }
      },
      secondary: {
        default: {
          light: { color: COLOR_GREY_500 },
          dark: { color: COLOR_GREY_400 }
        }
      },
      minor: {
        default: {
          light: { color: COLOR_GREY_300 },
          dark: { color: COLOR_GREY_700 }
        }
      },
      link: {
        default: {
          light: { color: COLOR_BLUE_600 },
          dark: { color: COLOR_BLUE_600 }
        }
      },
      error: {
        default: {
          light: { color: COLOR_RED_600 },
          dark: { color: COLOR_RED_600 }
        }
      }
    },
    border: {
      divider: {
        light: { fill: COLOR_GREY_200 },
        dark: { fill: COLOR_GREY_800 }
      },
      container: {
        light: { fill: COLOR_GREY_200 },
        dark: { fill: COLOR_GREY_800 }
      }
    },
    shadow: {
      container: {
        light: {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.12 },
          offset: { x: 0, y: 2 },
          blur: 12
        },
        dark: {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.12 },
          offset: { x: 0, y: 2 },
          blur: 12
        }
      },
      transparent: {
        light: {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0 },
          offset: { x: 0, y: 0 },
          blur: 0
        },
        dark: {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0 },
          offset: { x: 0, y: 0 },
          blur: 0
        }
      }
    },
    status: {
      success: {
        light: { fill: COLOR_GREEN_600, color: COLOR_WHITE },
        dark: { fill: COLOR_GREEN_600, color: COLOR_WHITE }
      },
      warning: {
        light: { fill: COLOR_ORANGE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_ORANGE_600, color: COLOR_WHITE }
      },
      error: {
        light: { fill: COLOR_RED_600, color: COLOR_WHITE },
        dark: { fill: COLOR_RED_600, color: COLOR_WHITE }
      },
      important: {
        light: { fill: COLOR_YELLOW_600, color: COLOR_WHITE },
        dark: { fill: COLOR_YELLOW_600, color: COLOR_WHITE }
      },
      secondary: {
        light: { fill: COLOR_LIGHTBLUE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_LIGHTBLUE_600, color: COLOR_WHITE }
      },
      primary: {
        light: { fill: COLOR_BLUE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_BLUE_600, color: COLOR_WHITE }
      },
      info: {
        light: { fill: COLOR_PURPLE_600, color: COLOR_WHITE },
        dark: { fill: COLOR_PURPLE_600, color: COLOR_WHITE }
      },
      dark: {
        light: { fill: COLOR_BLACK, color: COLOR_WHITE },
        dark: { fill: COLOR_BLACK, color: COLOR_WHITE }
      },
      white: {
        light: { fill: COLOR_WHITE, color: COLOR_WHITE },
        dark: { fill: COLOR_WHITE, color: COLOR_WHITE }
      },
      light: {
        light: {
          fill: { r: 0, g: 0, b: 0, a: 0 },
          color: COLOR_GREY_500,
          border: { stroke: COLOR_GREY_400, strokeWidth: 1, strokeAlign: 'inside' }
        },
        dark: {
          fill: { r: 0, g: 0, b: 0, a: 0 },
          color: COLOR_WHITE,
          border: { stroke: COLOR_GREY_200, strokeWidth: 1, strokeAlign: 'inside' }
        }
      },
      disabled: {
        light: { fill: COLOR_GREY_400, color: COLOR_WHITE },
        dark: { fill: COLOR_GREY_400, color: COLOR_WHITE }
      }
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
      radius: { cornerRadius: 4 },
      ghost: {
        default: {
          light: { fill: { r: 0, g: 0, b: 0, a: 0 } },
          dark: { fill: { r: 0, g: 0, b: 0, a: 0 } }
        },
        hover: {
          light: { fill: COLOR_GREY_100 },
          dark: { fill: COLOR_GREY_800 }
        },
        disabled: {
          light: { fill: { r: 0, g: 0, b: 0, a: 0 } },
          dark: { fill: { r: 0, g: 0, b: 0, a: 0 } }
        }
      },
      checkbox: {
        disabled: {
          light: { fill: COLOR_WHITE, border: { stroke: COLOR_GREY_300, strokeWidth: 1, strokeAlign: 'inside' } },
          dark: { fill: COLOR_GREY_900, border: { stroke: COLOR_GREY_700, strokeWidth: 1, strokeAlign: 'inside' } }
        },
        disabledActive: {
          light: { fill: COLOR_GREY_300 },
          dark: { fill: COLOR_GREY_700 }
        },

        hover: {
          light: { border: { stroke: COLOR_BLUE_600, strokeWidth: 2, strokeAlign: 'inside' } },
          dark: { border: { stroke: COLOR_BLUE_600, strokeWidth: 2, strokeAlign: 'inside' } }
        },

        empty0: {
          light: { fill: COLOR_WHITE, border: { stroke: COLOR_GREY_500, strokeWidth: 1, strokeAlign: 'inside' } },
          dark: { fill: COLOR_GREY_900, border: { stroke: COLOR_GREY_400, strokeWidth: 1, strokeAlign: 'inside' } }
        },
        active0: {
          light: { fill: COLOR_BLACK },
          dark: { fill: COLOR_WHITE }
        },

        empty1: {
          light: {
            fill: COLOR_LIGHTBLUE_600_ALPHA,
            border: { stroke: COLOR_LIGHTBLUE_600, strokeWidth: 1, strokeAlign: 'inside' }
          },
          dark: {
            fill: COLOR_LIGHTBLUE_600_ALPHA,
            border: { stroke: COLOR_LIGHTBLUE_600, strokeWidth: 1, strokeAlign: 'inside' }
          }
        },
        active1: {
          light: { fill: COLOR_LIGHTBLUE_600 },
          dark: { fill: COLOR_LIGHTBLUE_600 }
        },

        empty2: {
          light: {
            fill: COLOR_YELLOW_600_ALPHA,
            border: { stroke: COLOR_YELLOW_600, strokeWidth: 1, strokeAlign: 'inside' }
          },
          dark: {
            fill: COLOR_YELLOW_600_ALPHA,
            border: { stroke: COLOR_YELLOW_600, strokeWidth: 1, strokeAlign: 'inside' }
          }
        },
        active2: {
          light: { fill: COLOR_YELLOW_600 },
          dark: { fill: COLOR_YELLOW_600 }
        },

        empty3: {
          light: {
            fill: COLOR_RED_600_ALPHA,
            border: { stroke: COLOR_RED_600, strokeWidth: 1, strokeAlign: 'inside' }
          },
          dark: { fill: COLOR_RED_600_ALPHA, border: { stroke: COLOR_RED_600, strokeWidth: 1, strokeAlign: 'inside' } }
        },
        active3: {
          light: { fill: COLOR_RED_600 },
          dark: { fill: COLOR_RED_600 }
        }
      }
    },
    layer: {
      default: {
        light: { fill: COLOR_WHITE },
        dark: { fill: COLOR_GREY_900 }
      },
      active: {
        light: { fill: COLOR_BLUE_600 },
        dark: { fill: COLOR_BLUE_600 }
      },
      disabled: {
        light: { fill: COLOR_GREY_300 },
        dark: { fill: COLOR_GREY_700 }
      }
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

export default tokens

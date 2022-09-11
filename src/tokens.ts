import { Tokens } from './types'

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
  typo: {
    h4: {
      fontFamily: FONT_FAMILY,
      fontSize: 28,
      lineHeight: 34,
      fontWeight: 600
    },
    p4: {
      fontFamily: FONT_FAMILY,
      fontSize: 16,
      lineHeight: 23,
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
  colors: {
    light: {
      txt: {
        primary: {
          default: { fill: COLOR_BLACK },
          inverted: { fill: COLOR_WHITE }
        },
        secondary: {
          default: { fill: COLOR_GREY_500 }
        },
        minor: {
          default: { fill: COLOR_GREY_300 }
        },
        link: {
          default: { fill: COLOR_BLUE_600 }
        }
      },
      border: {
        default: { fill: COLOR_GREY_200 }
      },
      status: {
        added: {
          label: 'Added',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_GREEN_600 }
        },
        fixed: {
          label: 'Fixed',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_BLUE_600 }
        },
        changed: {
          label: 'Changed',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_PURPLE_600 }
        },
        depricated: {
          label: 'Deprecated',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_ORANGE_600 }
        },
        removed: {
          label: 'Removed',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_BLACK }
        },
        breaking: {
          label: 'Breaking',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_RED_600 }
        },
        other: {
          label: 'Other',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_GREY_400 }
        },
        inProgress: {
          label: 'In progress',
          title: { fill: COLOR_GREY_500 },
          tag: {
            fill: { r: 0, g: 0, b: 0, a: 0 },
            stroke: COLOR_GREY_400,
            strokeWidth: 1
          }
        }
      },
      state: {
        hover: { button: { fill: COLOR_GREY_100 }, input: { fill: COLOR_BLUE_600 } }
      },
      background: {
        default: { fill: COLOR_WHITE }
      }
    },
    dark: {
      txt: {
        primary: {
          default: { fill: COLOR_WHITE },
          inverted: { fill: COLOR_BLACK }
        },
        secondary: {
          default: { fill: COLOR_GREY_400 }
        },
        minor: {
          default: { fill: COLOR_GREY_700 }
        },
        link: {
          default: { fill: COLOR_BLUE_600 }
        }
      },
      border: {
        default: { fill: COLOR_GREY_800 }
      },
      status: {
        added: {
          label: 'Added',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_GREEN_600 }
        },
        fixed: {
          label: 'Fixed',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_BLUE_600 }
        },
        changed: {
          label: 'Changed',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_PURPLE_600 }
        },
        depricated: {
          label: 'Depricated',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_ORANGE_600 }
        },
        removed: {
          label: 'Removed',
          title: { fill: COLOR_GREY_300 },
          tag: { fill: COLOR_GREY_800 }
        },
        breaking: {
          label: 'Breaking',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_RED_600 }
        },
        other: {
          label: 'Other',
          title: { fill: COLOR_WHITE },
          tag: { fill: COLOR_GREY_400 }
        },
        inProgress: {
          label: 'In progress',
          title: { fill: COLOR_WHITE },
          tag: {
            fill: { r: 0, g: 0, b: 0, a: 0 },
            stroke: COLOR_GREY_200,
            strokeWidth: 1
          }
        }
      },
      state: {
        hover: { button: { fill: COLOR_GREY_800 }, input: { fill: COLOR_BLUE_600 } }
      },
      background: {
        default: { fill: COLOR_GREY_900 }
      }
    }
  }
}

export default tokens

const BUTTON_TYPES = Object.freeze({
  FAB: 'FAB',
  RAISED: 'RAISED',
})

const COLOR_PALLETE = Object.freeze({
  GREEN_DARK: {
    KEY: 'GREEN_DARK',
    HEX: '#799973',
    RGB: '121, 153, 115',
    CMYK: '21, 0, 25, 40',
    NAME: 'Verde Escuro',
  },

  GREEN_LIGHT: {
    KEY: 'GREEN_LIGHT',
    HEX: '#a2cc99',
    RGB: '162, 204, 153',
    CMYK: '21, 0, 25, 20',
    NAME: 'Verde Claro',
  },

  OFF_WHITE: {
    KEY: 'OFF_WHITE',
    HEX: '#fffff2',
    RGB: '255, 255, 242',
    CMYK: '0, 0, 5, 0',
    NAME: 'Off White',
  },

  GRAY_LIGHT: {
    KEY: 'GRAY_LIGHT',
    HEX: '#e6f2f0',
    RGB: '230, 242, 240',
    CMYK: '5, 0, 1, 5',
    NAME: 'Cinza Claro',
  },

  GRAY_DARK: {
    KEY: 'GRAY_DARK',
    HEX: '#c2ccca',
    RGB: '194, 204, 202',
    CMYK: '5, 0, 1, 20',
    NAME: 'Cinza Escuro',
  },
})

const COLORS = Object.freeze({
  ...COLOR_PALLETE,
  TEXT_DARK: {
    KEY: 'TEXT_DARK',
    HEX: '#333333',
    RGB: '51, 51, 51',
    CMYK: '0, 0, 0, 80',
    NAME: 'Texto Escuro',
  },
  BROWN_MID: {
    KEY: 'BROWN_MID',
    HEX: '#936037',
    RGB: '147, 96, 55',
    CMYK: '0, 35, 63, 42',
    NAME: 'Marrom Médio',
  },
  WHITE: {
    KEY: 'WHITE',
    HEX: '#ffffff',
    RGB: '255, 255, 255',
    CMYK: '0, 0, 0, 0',
    NAME: 'Branco',
  },
})

const PALLETE = Object.keys(COLOR_PALLETE)

const COLOR_PALLETE_STYLE = Object.freeze({
  GREEN_DARK: {
    background: COLORS.GREEN_DARK.HEX,
    color: COLORS.GREEN_LIGHT.HEX,
  },
  GREEN_LIGHT: {
    background: COLORS.GREEN_LIGHT.HEX,
    color: COLORS.GREEN_DARK.HEX,
  },
  OFF_WHITE: {
    background: COLORS.OFF_WHITE.HEX,
    color: COLORS.GRAY_DARK.HEX,
  },
  GRAY_LIGHT: {
    background: COLORS.GRAY_LIGHT.HEX,
    color: COLORS.GRAY_DARK.HEX,
  },
  GRAY_DARK: {
    background: COLORS.GRAY_DARK.HEX,
    color: COLORS.GRAY_LIGHT.HEX,
  },
})

export { PALLETE, BUTTON_TYPES, COLOR_PALLETE, COLOR_PALLETE_STYLE, COLORS }

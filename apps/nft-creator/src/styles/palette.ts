import { ActiveColors, BasicColors, HoverColors, Palette, StatusColors, Theme, SpecialColors } from './';

export const colorSet = {
  orange: '#ca6702',
  orange300: '#ca6702',
  orange700: '#ca6702',
  green: '#2BD071',
  green300: '#2BD071',
  green700: '#2BD071',
  red: '#f94144',
  red300: '#f94144',
  red700: '#f94144',
  grey: '#3d3d3d',
  grey300: '#3d3d3d',
  grey700: '#2c2c2c',
  black: '#000000',
  black300: '#000000',
  black700: '#000000',
  cadetBlueCrayola: '#adb5bd',
  cadetBlueCrayola300: '#adb5bd',
  cadetBlueCrayola700: '#adb5bd',
  white: '#ffffff',
  white300: '#ffffff',
  white700: '#ffffff',
  pistachio: '#90be6d',
  pistachio300: '#90be6d',
  pistachio700: '#90be6d',
  blue: '#5361e7',
  blue300: '#808aed',
  blue700: '#2638e1',
  davysGrey: '#bcbcbc',
  davysGrey300: '#bcbcbc',
  davysGrey700: '#bcbcbc',
  maizeCrayola: '#f9c74f',
  cultured: '#f8f9fa',
  eerieBlack: '#1a1a1a',
  gainsboro: '#fffefe',
  lightGray: '#ced4da',
  onyx: '#282828',
} as const;

const status: StatusColors = {
  danger: colorSet.red,
  success: colorSet.pistachio,
  warn: colorSet.orange,
};

const basic: BasicColors = {
  black: colorSet.black,
  brand: colorSet.green,
  disabled: colorSet.cadetBlueCrayola,
  white: colorSet.white,
  dark: colorSet.grey,
};

const special: SpecialColors = {
  eerieBlack: colorSet.eerieBlack,
};

const hover: HoverColors = {
  black: colorSet.black700,
  brand: colorSet.green700,
  disabled: colorSet.cadetBlueCrayola700,
  white: colorSet.white700,
  danger: colorSet.red700,
  success: colorSet.pistachio700,
  warn: colorSet.orange700,
  primary: colorSet.black700,
  secondary: colorSet.davysGrey700,
  dark: colorSet.grey700,
};

const active: ActiveColors = {
  black: colorSet.black300,
  brand: colorSet.green300,
  disabled: colorSet.cadetBlueCrayola300,
  white: colorSet.white300,
  danger: colorSet.red300,
  success: colorSet.pistachio300,
  warn: colorSet.orange300,
  primary: colorSet.black300,
  secondary: colorSet.davysGrey300,
  dark: colorSet.grey300,
};

export const lightWeb: Palette = {
  background: {
    primary: colorSet.gainsboro,
    secondary: colorSet.lightGray,
  },
  text: {
    primary: colorSet.black,
    secondary: colorSet.davysGrey,
  },
  status,
  basic,
  hover,
  active,
  special,
};

export const darkWeb: Palette = {
  background: {
    primary: colorSet.onyx,
    secondary: colorSet.lightGray,
  },
  text: {
    primary: colorSet.white,
    secondary: colorSet.davysGrey,
  },
  status,
  basic,
  hover,
  active,
  special,
};

export const lightTheme: Theme = { colors: lightWeb };
export const darkTheme: Theme = { colors: darkWeb };

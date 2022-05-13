import { ActiveColors, BasicColors, HoverColors, Palette, StatusColors, Theme } from './';

export const colorSet = {
  orange: '#ca6702',
  orange300: '#ca6702',
  orange700: '#ca6702',
  redSalsa: '#f94144',
  maizeCrayola: '#f9c74f',
  pistachio: '#90be6d',
  jungleGreen: '#2BD071',
  cultured: '#f8f9fa',
  white: '#ffffff',
  black: '#000000',
  gainsboro: '#fffefe',
  lightGray: '#ced4da',
  blue: '#5361e7',
  blue300: '#808aed',
  blue700: '#2638e1',
  davysGrey: '#bcbcbc',
  onyx: '#282828',
  cadetBlueCrayola: '#adb5bd',
  grey: '#3d3d3d',
  grey300: '#3d3d3d',
  grey700: '#2c2c2c',
} as const;

const status: StatusColors = {
  danger: colorSet.redSalsa,
  success: colorSet.pistachio,
  warn: colorSet.orange,
};

const basic: BasicColors = {
  black: colorSet.black,
  brand: colorSet.jungleGreen,
  disabled: colorSet.cadetBlueCrayola,
  white: colorSet.white,
  dark: colorSet.grey,
};

const hover: HoverColors = {
  black: colorSet.black,
  brand: colorSet.blue700,
  disabled: colorSet.cadetBlueCrayola,
  white: colorSet.white,
  danger: colorSet.redSalsa,
  success: colorSet.pistachio,
  warn: colorSet.orange,
  primary: colorSet.black,
  secondary: colorSet.davysGrey,
  dark: colorSet.grey700,
};

const active: ActiveColors = {
  black: colorSet.black,
  brand: colorSet.blue300,
  disabled: colorSet.cadetBlueCrayola,
  white: colorSet.white,
  danger: colorSet.redSalsa,
  success: colorSet.pistachio,
  warn: colorSet.orange,
  primary: colorSet.black,
  secondary: colorSet.davysGrey,
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
};

export const lightTheme: Theme = { colors: lightWeb };
export const darkTheme: Theme = { colors: darkWeb };

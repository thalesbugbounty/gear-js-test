import { Palette, Theme } from './';

export const colorSet = {
  alloyOrange: '#ca6702',
  redSalsa: '#f94144',
  maizeCrayola: '#f9c74f',
  pistachio: '#90be6d',
  jungleGreen: '#43aa8b',
  cultured: '#f8f9fa',
  white: '#ffffff',
  black: '#000000',
  gainsboro: '#fffefe',
  lightGray: '#ced4da',
  softBlue: '#5361e7',
  davysGrey: '#495057',
  onyx: '#343a40',
  //   'Rich Black FOGRA 29': '#001219',
  //   'Blue Sapphire': '#005f73',
  //   'Viridian Green': '#0a9396',
  //   'Middle Blue Green': '#94d2bd',
  //   'Medium Champagne': '#e9d8a6',
  //   Gamboge: '#ee9b00',
  //   Rust: '#bb3e03',
  //   Rufous: '#ae2012',
  //   'Ruby Red': '#9b2226',
  //   'Orange Red': '#f3722c',
  //   'Yellow Orange Color Wheel': '#f8961e',
  //   'Mango Tango': '#f9844a',
  //   'Steel Teal': '#4d908e',
  //   'Queen Blue': '#577590',
  //   'Celadon Blue': '#277da1',
  //   'Cultured 2': '#e9ecef',
  //   'Cadet Blue Crayola': '#adb5bd',
  //   'Sonic Silver': '#6c757d',
  //   'Eerie Black': '#212529',
} as const;

export const lightWeb: Palette = {
  background: {
    primary: colorSet.gainsboro,
    secondary: colorSet.lightGray,
  },
  brand: {
    primary: colorSet.softBlue,
    green: colorSet.jungleGreen,
    yellow: colorSet.maizeCrayola,
  },
  status: {
    danger: colorSet.redSalsa,
    success: colorSet.pistachio,
    warn: colorSet.alloyOrange,
  },
  text: {
    primary: colorSet.black,
    secondary: colorSet.davysGrey,
    inversive: colorSet.white,
    brand: colorSet.softBlue,
  },
};
export const darkWeb: Palette = {
  background: {
    primary: colorSet.gainsboro,
    secondary: colorSet.lightGray,
  },
  brand: {
    primary: colorSet.softBlue,
    green: colorSet.jungleGreen,
    yellow: colorSet.maizeCrayola,
  },
  status: {
    danger: colorSet.redSalsa,
    success: colorSet.pistachio,
    warn: colorSet.alloyOrange,
  },
  text: {
    primary: colorSet.white,
    secondary: colorSet.onyx,
    inversive: colorSet.black,
    brand: colorSet.softBlue,
  },
};

export const lightTheme: Theme = { colors: lightWeb };
export const darkTheme: Theme = { colors: darkWeb };

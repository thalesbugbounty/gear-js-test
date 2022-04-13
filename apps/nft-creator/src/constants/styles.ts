import { getColorFromPalette } from '../helpers/getColorFromPalette';
import { ColorsTheme, Theme } from '../types/styles';

export const palette = {
  'Rich Black FOGRA 29': '#001219',
  'Blue Sapphire': '#005f73',
  'Viridian Green': '#0a9396',
  'Middle Blue Green': '#94d2bd',
  'Medium Champagne': '#e9d8a6',
  Gamboge: '#ee9b00',
  'Alloy Orange': '#ca6702',
  Rust: '#bb3e03',
  Rufous: '#ae2012',
  'Ruby Red': '#9b2226',
  'Red Salsa': '#f94144',
  'Orange Red': '#f3722c',
  'Yellow Orange Color Wheel': '#f8961e',
  'Mango Tango': '#f9844a',
  'Maize Crayola': '#f9c74f',
  Pistachio: '#90be6d',
  'Jungle Green': '#43aa8b',
  'Steel Teal': '#4d908e',
  'Queen Blue': '#577590',
  'Celadon Blue': '#277da1',
  Cultured: '#f8f9fa',
  'Cultured 2': '#e9ecef',
  Gainsboro: '#dee2e6',
  'Light Gray': '#ced4da',
  'Cadet Blue Crayola': '#adb5bd',
  'Sonic Silver': '#6c757d',
  'Davys Grey': '#495057',
  Onyx: '#343a40',
  'Eerie Black': '#212529',
};

export const lightWeb: ColorsTheme = {
  background: {
    primary: getColorFromPalette('Cultured'),
    secondary: getColorFromPalette('Cadet Blue Crayola'),
  },
  palette: {
    blue: getColorFromPalette('Celadon Blue'),
    green: getColorFromPalette('Pistachio'),
    yellow: getColorFromPalette('Maize Crayola'),
  },
  status: {
    danger: getColorFromPalette('Red Salsa'),
    success: getColorFromPalette('Jungle Green'),
    warn: getColorFromPalette('Alloy Orange'),
  },
  text: {
    primary: getColorFromPalette('Eerie Black'),
    secondary: getColorFromPalette('Sonic Silver'),
  },
};
export const darkWeb: ColorsTheme = {
  background: {
    primary: getColorFromPalette('Cultured'),
    secondary: getColorFromPalette('Cadet Blue Crayola'),
  },
  palette: {
    blue: getColorFromPalette('Celadon Blue'),
    green: getColorFromPalette('Pistachio'),
    yellow: getColorFromPalette('Maize Crayola'),
  },
  status: {
    danger: getColorFromPalette('Red Salsa'),
    success: getColorFromPalette('Jungle Green'),
    warn: getColorFromPalette('Alloy Orange'),
  },
  text: {
    primary: getColorFromPalette('Eerie Black'),
    secondary: getColorFromPalette('Sonic Silver'),
  },
};

export const lightTheme: Theme = { colors: lightWeb };
export const darkTheme: Theme = { colors: darkWeb };

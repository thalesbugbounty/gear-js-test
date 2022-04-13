import { palette } from '../constants/styles';
import { Color } from '../types/styles';

export const getColorFromPalette = (name: keyof typeof palette): Color => {
  return palette[name] as Color;
};

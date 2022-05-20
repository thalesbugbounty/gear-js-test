import { TypographySize } from '../ui/Typography/types';
import { FONT_SIZE, SIZE_STYLE } from './constants';
import { SpinnerSize } from './types';

export const getFontSize = (size: SpinnerSize): TypographySize => {
  return FONT_SIZE[size];
};

export const getIconSize = (size: SpinnerSize): number => {
  return SIZE_STYLE[size];
};

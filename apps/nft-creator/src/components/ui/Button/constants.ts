import { BorderWidth, FONT_SIZE, LINE_HEIGHT } from '../../../styles';
import { SizeStyle } from './types';

export const BUTTON_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const BORDER_WIDTH: BorderWidth = 'm';

export const SIZE_STYLE: SizeStyle = {
  [BUTTON_SIZE.small]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
  },
  [BUTTON_SIZE.medium]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
  },
  [BUTTON_SIZE.large]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.l,
  },
};

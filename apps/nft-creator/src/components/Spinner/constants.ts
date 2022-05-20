import { TYPOGRAPHY_SIZE } from '../ui/Typography/constants';
import { FontSize, SizeStyle } from './types';

export const SPINNER_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const SIZE_STYLE: SizeStyle = {
  [SPINNER_SIZE.small]: 28,
  [SPINNER_SIZE.medium]: 36,
  [SPINNER_SIZE.large]: 48,
};

export const FONT_SIZE: FontSize = {
  [SPINNER_SIZE.small]: TYPOGRAPHY_SIZE.s,
  [SPINNER_SIZE.medium]: TYPOGRAPHY_SIZE.m,
  [SPINNER_SIZE.large]: TYPOGRAPHY_SIZE.l,
};

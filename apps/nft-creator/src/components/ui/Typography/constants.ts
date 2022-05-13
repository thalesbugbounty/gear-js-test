import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '../../../styles';
import { FontStyle, WeightStyle } from './types';

export const TYPOGRAPHY_WEIGHT = {
  bold: 'bold',
  regular: 'regular',
  light: 'light',
} as const;

export const TYPOGRAPHY_SIZE = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
} as const;

export const TYPOGRAPHY_TAG = {
  span: 'span',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export const FONT_STYLE: FontStyle = {
  [TYPOGRAPHY_SIZE.xs]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
  },
  [TYPOGRAPHY_SIZE.s]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
  },
  [TYPOGRAPHY_SIZE.m]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
  },
  [TYPOGRAPHY_SIZE.l]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.l,
  },
};

export const WEIGHT_STYLE: WeightStyle = {
  [TYPOGRAPHY_WEIGHT.bold]: FONT_WEIGHT.bold,
  [TYPOGRAPHY_WEIGHT.regular]: FONT_WEIGHT.regular,
  [TYPOGRAPHY_WEIGHT.light]: FONT_WEIGHT.light,
};

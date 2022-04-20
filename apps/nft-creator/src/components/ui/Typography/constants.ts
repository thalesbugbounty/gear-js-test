import {
  fontSizeM,
  fontSizeS,
  fontSizeXS,
  fontWeightBold,
  fontWeightLight,
  fontWeightRegular,
  lineHeightM,
  lineHeightS,
  lineHeightXS,
} from '../../../styles';
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
    fontSize: fontSizeXS,
    lineHeight: lineHeightXS,
  },
  [TYPOGRAPHY_SIZE.s]: {
    fontSize: fontSizeS,
    lineHeight: lineHeightS,
  },
  [TYPOGRAPHY_SIZE.m]: {
    fontSize: fontSizeM,
    lineHeight: lineHeightM,
  },
};

export const WEIGHT_STYLE: WeightStyle = {
  [TYPOGRAPHY_WEIGHT.bold]: {
    fontWeight: fontWeightBold,
  },
  [TYPOGRAPHY_WEIGHT.regular]: {
    fontWeight: fontWeightRegular,
  },
  [TYPOGRAPHY_WEIGHT.light]: {
    fontWeight: fontWeightLight,
  },
};

import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getPalette, WithTheme } from '../../../styles';
import { TYPOGRAPHY_SIZE, FONT_STYLE, WEIGHT_STYLE, TYPOGRAPHY_WEIGHT } from './constants';
import { TypographyProps, TypographySize, FontStyle, TypographyWeight, WeightStyle } from './types';

const getTypographyFontStyle = (size: TypographySize, style: FontStyle = FONT_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight } = style[size];

  return css`
    ${fontSize};
    ${lineHeight}
  `;
};

const getTypographyWeightStyle = (weight: TypographyWeight, style: WeightStyle = WEIGHT_STYLE) => {
  const { fontWeight } = style[weight];

  return css`
    ${fontWeight}
  `;
};

export const getFontStyle = ({ size = TYPOGRAPHY_SIZE.s }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyFontStyle(size);
};

export const getTextColor = ({ color, theme }: WithTheme<TypographyProps>): FlattenSimpleInterpolation => {
  const palette = getPalette(theme);

  return css`
    color: ${palette.text[color || 'primary']};
  `;
};

export const getFontWeight = ({ weight = TYPOGRAPHY_WEIGHT.regular }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyWeightStyle(weight);
};

import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getTypographyColor, WithTheme } from '../../../styles';
import { TYPOGRAPHY_SIZE, FONT_STYLE, WEIGHT_STYLE, TYPOGRAPHY_WEIGHT } from './constants';
import { TypographyProps, TypographySize, FontStyle, TypographyWeight, WeightStyle } from './types';

const getTypographyFontStyle = (size: TypographySize, style: FontStyle = FONT_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight } = style[size];

  return css`
    ${fontSize};
    ${lineHeight}
  `;
};

const getTypographyWeightStyle = (
  weight: TypographyWeight,
  style: WeightStyle = WEIGHT_STYLE,
): FlattenSimpleInterpolation => style[weight];

export const getFontStyle = ({ size = TYPOGRAPHY_SIZE.s }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyFontStyle(size);
};

export const getFontColor = (props: WithTheme<TypographyProps>): FlattenSimpleInterpolation => {
  return getTypographyColor(props);
};

export const getFontWeight = ({ weight = TYPOGRAPHY_WEIGHT.regular }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyWeightStyle(weight);
};

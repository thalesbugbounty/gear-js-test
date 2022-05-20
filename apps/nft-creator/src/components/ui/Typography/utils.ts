import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getTypographyColor, WithTheme } from '../../../styles';
import {
  TYPOGRAPHY_SIZE,
  FONT_STYLE,
  WEIGHT_STYLE,
  TYPOGRAPHY_WEIGHT,
  FAMILY_STYLE,
  TYPOGRAPHY_FAMILY,
} from './constants';
import {
  TypographyProps,
  TypographySize,
  FontStyle,
  TypographyWeight,
  WeightStyle,
  TypographyFamily,
  FamilyStyle,
} from './types';

const getTypographyFamilyStyle = (
  family: TypographyFamily,
  style: FamilyStyle = FAMILY_STYLE,
): FlattenSimpleInterpolation =>
  css`
    ${style[family]};
  `;

const getTypographyFontStyle = (size: TypographySize, style: FontStyle = FONT_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight } = style[size];

  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};

const getTypographyWeightStyle = (
  weight: TypographyWeight,
  style: WeightStyle = WEIGHT_STYLE,
): FlattenSimpleInterpolation =>
  css`
    font-weight: ${style[weight]};
  `;

export const getFontFamily = ({ family = TYPOGRAPHY_FAMILY.prompt }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyFamilyStyle(family);
};

export const getFontStyle = ({ size = TYPOGRAPHY_SIZE.s }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyFontStyle(size);
};

export const getFontColor = (props: WithTheme<TypographyProps>): FlattenSimpleInterpolation => {
  return getTypographyColor(props);
};

export const getFontWeight = ({ weight = TYPOGRAPHY_WEIGHT.regular }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyWeightStyle(weight);
};

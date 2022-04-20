import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getPalette, Theme, WithTheme } from '../../../styles';
import { TYPOGRAPHY_SIZE, FONT_STYLE, WEIGHT_STYLE, TYPOGRAPHY_WEIGHT } from './constants';
import {
  TypographyProps,
  TypographySize,
  FontStyle,
  TypographyWeight,
  WeightStyle,
  TypographyColor,
  ColorStyle,
} from './types';

const getTypographyFontStyle = (size: TypographySize, style: FontStyle = FONT_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight } = style[size];

  return css`
    ${fontSize};
    ${lineHeight}
  `;
};

const getTypographyWeightStyle = (weight: TypographyWeight, style: WeightStyle = WEIGHT_STYLE) => {
  const fontWeight = style[weight];

  return css`
    ${fontWeight}
  `;
};

const getTypographyColorStyle = (name: TypographyColor, style: ColorStyle) => {
  const color = style[name];

  return css`
    ${color}
  `;
};

const getColorStyle = (theme: Theme): ColorStyle => {
  const { text, status } = getPalette(theme);
  return {
    brand: css`
      color: ${text.brand};
    `,
    danger: css`
      color: ${status.danger};
    `,
    success: css`
      color: ${status.success};
    `,
    warn: css`
      color: ${status.warn};
    `,
    inversive: css`
      color: ${text.inversive};
    `,
    primary: css`
      color: ${text.primary};
    `,
    secondary: css`
      color: ${text.secondary};
    `,
  };
};

export const getFontStyle = ({ size = TYPOGRAPHY_SIZE.s }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyFontStyle(size);
};

export const getFontColor = ({ color = 'primary', theme }: WithTheme<TypographyProps>): FlattenSimpleInterpolation => {
  const colorStyle = getColorStyle(theme);

  return getTypographyColorStyle(color, colorStyle);
};

export const getFontWeight = ({ weight = TYPOGRAPHY_WEIGHT.regular }: TypographyProps): FlattenSimpleInterpolation => {
  return getTypographyWeightStyle(weight);
};

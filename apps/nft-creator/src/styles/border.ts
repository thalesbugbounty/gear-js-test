import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import {
  BorderColorName,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  BORDER_RADIUS,
  BORDER_WIDTH,
  getActivePalette,
  getBorderPalette,
  getHoverPalette,
  WithTheme,
} from './';
import { BorderProps } from './types';

const getBorderWidthStyle = (width: BorderWidth, style: BorderStyle<BorderWidth> = BORDER_WIDTH): string =>
  style[width];

const getBorderRadiusStyle = (radius: BorderRadius, style: BorderStyle<BorderRadius> = BORDER_RADIUS): string =>
  style[radius];

const getBorderColorStyle = (color: BorderColorName, style: BorderStyle<BorderColorName>): string => style[color];

export const getBorder = ({
  theme,
  color = 'brand',
  width = 'm',
}: WithTheme<BorderProps>): FlattenSimpleInterpolation => {
  const borderColors = getBorderPalette(theme);
  return css`
    border: ${getBorderWidthStyle(width)} solid ${getBorderColorStyle(color, borderColors)};
  `;
};

export const getHoverBorder = ({
  theme,
  color = 'brand',
  width = 's',
}: WithTheme<BorderProps>): FlattenSimpleInterpolation => {
  const borderColors = getHoverPalette(theme);
  return css`
    border: ${getBorderWidthStyle(width)} solid ${getBorderColorStyle(color, borderColors)};
  `;
};

export const getActiveBorder = ({
  theme,
  color = 'brand',
  width = 's',
}: WithTheme<BorderProps>): FlattenSimpleInterpolation => {
  const borderColors = getActivePalette(theme);
  return css`
    border: ${getBorderWidthStyle(width)} solid ${getBorderColorStyle(color, borderColors)};
  `;
};

export const getBorderRadius = (radius: BorderRadius = 'standart'): FlattenSimpleInterpolation => {
  return css`
    border-radius: ${getBorderRadiusStyle(radius)};
  `;
};

import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { BORDER_RADIUS, BORDER_WIDTH } from './sizes';
import { BorderColor, BorderRadius, BorderStyle, BorderWidth, Theme, WithTheme, getPalette } from './';
import { BorderBaseProps } from './types';

const getBorderWidthStyle = (width: BorderWidth, style: BorderStyle<BorderWidth> = BORDER_WIDTH): string =>
  style[width];

const getBorderRadiusStyle = (radius: BorderRadius, style: BorderStyle<BorderRadius> = BORDER_RADIUS): string =>
  style[radius];

const getBorderColorStyle = (color: BorderColor, style: BorderStyle<BorderColor>): string => style[color];

const getBorderColors = (theme: Theme): BorderStyle<BorderColor> => {
  const { status, brand } = getPalette(theme);

  return {
    danger: status.danger,
    success: status.success,
    warn: status.warn,
    primary: brand.primary,
  };
};

export const getBorder = ({
  theme,
  color = 'primary',
  width = 's',
}: WithTheme<BorderBaseProps>): FlattenSimpleInterpolation => {
  const borderColors = getBorderColors(theme);
  return css`
    border: ${getBorderWidthStyle(width)} solid ${getBorderColorStyle(color, borderColors)};
  `;
};

export const getBorderRadius = ({ radius = 'standart' }: WithTheme<BorderBaseProps>): FlattenSimpleInterpolation => {
  return css`
    border-radius: ${getBorderRadiusStyle(radius)};
  `;
};

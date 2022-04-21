import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import {
  ActiveColors,
  BorderColors,
  HoverColors,
  Palette,
  Theme,
  TypographyButtonColorName,
  TypographyButtonColors,
  TypographyColorName,
  TypographyColors,
  WithTheme,
} from './';

export const getPalette = (theme: Theme): Palette => theme.colors;

export const getHoverPalette = (theme: Theme): HoverColors => {
  const { hover } = getPalette(theme);
  return { ...hover };
};

export const getActivePalette = (theme: Theme): ActiveColors => {
  const { active } = getPalette(theme);
  return { ...active };
};

export const getBorderPalette = (theme: Theme): BorderColors => {
  const { status, basic } = getPalette(theme);
  return { ...status, ...basic };
};

const getTypographyPalette = (theme: Theme): TypographyColors => {
  const { status, text } = getPalette(theme);
  return { ...status, ...text };
};

const getTypographyButtonPalette = (theme: Theme): TypographyButtonColors => {
  const { status, basic } = getPalette(theme);
  return { ...status, ...basic };
};

export const getTypographyColor = ({
  theme,
  color = 'primary',
}: WithTheme<{ color?: TypographyColorName }>): FlattenSimpleInterpolation => {
  const palette = getTypographyPalette(theme);
  return css`
    color: ${palette[color]};
  `;
};

export const getTypographyButtonColor = ({
  theme,
  color = 'brand',
}: WithTheme<{ color?: TypographyButtonColorName }>): FlattenSimpleInterpolation => {
  const palette = getTypographyButtonPalette(theme);
  return css`
    color: ${palette[color]};
  `;
};

export const getTypographyButtonHoverColor = ({
  theme,
  color = 'brand',
}: WithTheme<{ color?: TypographyButtonColorName }>): FlattenSimpleInterpolation => {
  const palette = getHoverPalette(theme);
  return css`
    color: ${palette[color]};
  `;
};

export const getTypographyButtonActiveColor = ({
  theme,
  color = 'brand',
}: WithTheme<{ color?: TypographyButtonColorName }>): FlattenSimpleInterpolation => {
  const palette = getActivePalette(theme);
  return css`
    color: ${palette[color]};
  `;
};

export const baseStyles = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getPalette(theme);
  return css`
    background: ${palette.background.primary};
    color: ${palette.text.primary};
  `;
};

export const fontFace = (
  name: string,
  woff2: string,
  woff: string,
  ttf: string,
  fontWeight: number | string,
): FlattenSimpleInterpolation => {
  return css`
    @font-face {
      font-family: ${name};
      src: url(${woff2}) format('woff2'), url(${woff}) format('woff'), url(${ttf}) format('truetype');

      font-weight: ${fontWeight};
      font-style: normal;
      display: swap;
    }
  `;
};

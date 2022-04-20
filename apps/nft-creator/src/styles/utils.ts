import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { Palette, Theme, WithTheme } from './';

export const getPalette = (theme: Theme): Palette => theme.colors;

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

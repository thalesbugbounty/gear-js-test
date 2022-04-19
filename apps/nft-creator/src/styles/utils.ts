import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { Palette, Theme, WithTheme } from './';

export const getPalette = (theme: Theme): Palette => theme.colors;

export const baseStyles = ({ theme }: WithTheme) => {
  const palette = getPalette(theme);
  return css`
    background: ${palette.background.primary};
    color: ${palette.text.primary};
  `;
};

export const fontFace = (name: string, src: string, fontWeight: number | string): FlattenSimpleInterpolation => {
  return css`
    @font-face {
      font-family: ${name};
      src: url(${'../fonts/' + src + '.woff2'}) format('woff2'), url(${'../fonts/' + src + '.woff'}) format('woff'),
        url(${'../fonts/' + src + '.ttf'}) format('truetype');

      font-weight: ${fontWeight};
      font-style: normal;
      display: swap;
    }
  `;
};

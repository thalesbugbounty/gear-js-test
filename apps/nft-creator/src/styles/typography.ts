import { css } from 'styled-components/macro';

export const RobotoFontFamily = css`
  font-family: 'Roboto', sans-serif;
`;

export const PromptFontFamily = `font-family: 'Prompt', sans-serif;`;

export const SyncopateFontFamily = `font-family: 'Syncopate', sans-serif;`;

export const FONT_WEIGHT = {
  bold: '700',
  demiBold: '600',
  semiBold: '550',
  medium: '500',
  regular: '400',
  light: '300',
} as const;

export const FONT_SIZE = {
  xxs: '11px',
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '22px',
  xxl: '28px',
  xxxl: '32px',
  xxxxl: '36px',
  xxxxxl: '42px',
} as const;

export const LINE_HEIGHT = {
  xxs: '16px',
  xs: '20px',
  s: '24px',
  m: '28px',
  l: '36px',
  xl: '40px',
  xxl: '48px',
  xxxl: '52px',
} as const;

export const letterSpacingNormal = css`
  letter-spacing: normal;
`;

export const letterSpacingS = css`
  letter-spacing: 0.15em;
`;

export const letterSpacingXS = css`
  letter-spacing: 0.12em;
`;

export const textUpperCase = css`
  text-transform: uppercase;
`;

export const textCapitalize = css`
  text-transform: capitalize;
`;

export const textEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

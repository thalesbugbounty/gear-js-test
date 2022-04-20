import { BORDER_WIDTH, BORDER_RADIUS } from './';

// ____Colors

type Color = `#${string}`;

type BackgroundColorNames = 'primary' | 'secondary';
type StatusColorsNames = 'danger' | 'success' | 'warn';
type TextColorsNames = 'primary' | 'secondary' | 'inversive' | 'brand';
type BrandColorsNames = 'primary' | 'yellow' | 'green';

export type BackgroundColors = Record<BackgroundColorNames, Color>;
export type StatusColors = Record<StatusColorsNames, Color>;
export type TextColors = Record<TextColorsNames, Color>;
export type BrandColors = Record<BrandColorsNames, Color>;

export interface Palette {
  background: BackgroundColors;
  status: StatusColors;
  text: TextColors;
  brand: BrandColors;
}

export interface Theme {
  colors: Palette;
}

export interface PropsWithTheme {
  theme: Theme;
}

export type WithTheme<T = unknown> = T & PropsWithTheme;

// ____Borders

export type BorderWidth = keyof typeof BORDER_WIDTH;
export type BorderRadius = keyof typeof BORDER_RADIUS;
export type BorderColor = StatusColorsNames | 'primary';

export type BorderStyle<T extends string> = {
  [K in T]: string;
};

export interface BorderBaseProps {
  color?: BorderColor;
  radius?: BorderRadius;
  width?: BorderWidth;
}

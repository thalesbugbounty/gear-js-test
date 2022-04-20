export type Color = `#${string}`;

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

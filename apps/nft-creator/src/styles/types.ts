export type Color = `#${string}`;

type BackgroundColorNames = 'primary' | 'secondary';
type StatusColorsNames = 'danger' | 'success' | 'warn';
type TextColorsNames = 'primary' | 'secondary' | 'inversive';
type BrandColorsNames = 'primary' | 'yellow' | 'green';

type BackgroundColors = Record<BackgroundColorNames, Color>;
type StatusColors = Record<StatusColorsNames, Color>;
type TextColors = Record<TextColorsNames, Color>;
type BrandColors = Record<BrandColorsNames, Color>;

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

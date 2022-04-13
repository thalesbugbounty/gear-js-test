export type Color = `#${string}`;

type BackgroundColorNames = 'primary' | 'secondary';
type StatusColorsNames = 'danger' | 'success' | 'warn';
type TextColorsNames = 'primary' | 'secondary';
type PaletteColorsNames = 'yellow' | 'blue' | 'green';

type BackgroundColors = Record<BackgroundColorNames, Color>;
type StatusColors = Record<StatusColorsNames, Color>;
type TextColors = Record<TextColorsNames, Color>;
type PaletteColors = Record<PaletteColorsNames, Color>;

export interface ColorsTheme {
  background: BackgroundColors;
  status: StatusColors;
  text: TextColors;
  palette: PaletteColors;
}

export interface Theme {
  colors: ColorsTheme;
}

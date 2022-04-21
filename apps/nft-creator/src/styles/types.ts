import { BORDER_WIDTH, BORDER_RADIUS } from './';

// ____Colors

type Color = `#${string}`;

type BackgroundColorName = 'primary' | 'secondary';
type StatusColorName = 'danger' | 'success' | 'warn';
type TextColorName = 'primary' | 'secondary';
type BasicColorName = 'brand' | 'yellow' | 'green' | 'white' | 'black' | 'disabled';

export type BackgroundColors = Record<BackgroundColorName, Color>;
export type StatusColors = Record<StatusColorName, Color>;
export type TextColors = Record<TextColorName, Color>;
export type BasicColors = Record<BasicColorName, Color>;
export type HoverColors = Record<StatusColorName | TextColorName | BasicColorName, Color>;
export type ActiveColors = Record<StatusColorName | TextColorName | BasicColorName, Color>;

export interface Palette {
  background: BackgroundColors;
  status: StatusColors;
  text: TextColors;
  basic: BasicColors;
  hover: HoverColors;
  active: ActiveColors;
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
export type BorderColorName = StatusColorName | BasicColorName;
export type BorderColors = Record<BorderColorName, string>;

export type BorderStyle<T extends string> = {
  [K in T]: string;
};

export interface BorderBaseProps {
  color?: BorderColorName;
  radius?: BorderRadius;
  width?: BorderWidth;
}

// ____Typography

export type TypographyColorName = TextColorName | StatusColorName;
export type TypographyColors = Record<TypographyColorName, string>;

export type TypographyButtonColorName = BorderColorName;
export type TypographyButtonColors = Record<TypographyButtonColorName, string>;

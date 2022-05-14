import { BORDER_WIDTH, BORDER_RADIUS, BORDER_TYPE } from './';

// ____Colors

export type Color = `#${string}`;

type BackgroundColorName = 'primary' | 'secondary';
type StatusColorName = 'danger' | 'success' | 'warn';
type TextColorName = 'primary' | 'secondary';
type BasicColorName = 'brand' | 'white' | 'black' | 'disabled' | 'dark';
type SpecialColorName = 'eerieBlack';

export type BackgroundColors = Record<BackgroundColorName, Color>;
export type StatusColors = Record<StatusColorName, Color>;
export type TextColors = Record<TextColorName, Color>;
export type BasicColors = Record<BasicColorName, Color>;
export type HoverColors = Record<StatusColorName | TextColorName | BasicColorName, Color>;
export type ActiveColors = Record<StatusColorName | TextColorName | BasicColorName, Color>;
export type SpecialColors = Record<SpecialColorName, Color>;

export interface Palette {
  background: BackgroundColors;
  status: StatusColors;
  text: TextColors;
  basic: BasicColors;
  hover: HoverColors;
  active: ActiveColors;
  special: SpecialColors;
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
export type BorderType = keyof typeof BORDER_TYPE;
export type BorderColorName = StatusColorName | BasicColorName;
export type BorderColors = Record<BorderColorName, string>;

export type BorderStyle<T extends string> = {
  [K in T]: string;
};

export interface BorderRadiusProps {
  radius?: BorderRadius;
}

export interface BorderProps {
  color?: BorderColorName;
  width?: BorderWidth;
}

// ____Typography

export type TypographyColorName = TextColorName | StatusColorName;
export type TypographyColors = Record<TypographyColorName, string>;

// ____Buttons

export type ButtonColorName = BorderColorName;
export type ButtonColors = Record<ButtonColorName, string>;

// ____Input

export type InputColorName = BorderColorName;
export type InputColors = Record<InputColorName, string>;

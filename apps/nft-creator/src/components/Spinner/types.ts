import { TypographySize } from '../ui/Typography/types';
import { SPINNER_SIZE } from './constants';

export type SpinnerSize = keyof typeof SPINNER_SIZE;

export type SizeStyle = Record<SpinnerSize, number>;

export type FontSize = Record<SpinnerSize, TypographySize>;

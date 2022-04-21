import { fontSizeS, lineHeightS, fontSizeM, lineHeightM, fontSizeL, lineHeightL, BorderWidth } from '../../../styles';
import { SizeStyle } from './types';

export const BUTTON_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const background = `background: transparent;`;
export const BORDER_NONE = `border: none;`;
export const BORDER_WIDTH: BorderWidth = 'l';

export const SIZE_STYLE: SizeStyle = {
  [BUTTON_SIZE.small]: {
    fontSize: fontSizeS,
    lineHeight: lineHeightS,
  },
  [BUTTON_SIZE.medium]: {
    fontSize: fontSizeM,
    lineHeight: lineHeightM,
  },
  [BUTTON_SIZE.large]: {
    fontSize: fontSizeL,
    lineHeight: lineHeightL,
  },
};

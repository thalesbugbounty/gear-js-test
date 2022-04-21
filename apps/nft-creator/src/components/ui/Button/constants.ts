import { css } from 'styled-components/macro';
import {
  fontSizeS,
  lineHeightS,
  fontSizeM,
  lineHeightM,
  fontSizeL,
  lineHeightL,
  INDENT,
  BorderWidth,
} from '../../../styles';
import { SizeStyle } from './types';

export const BUTTON_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const background = `background: transparent;`;
export const BORDER_WIDTH: BorderWidth = 'l';

export const SIZE_STYLE: SizeStyle = {
  [BUTTON_SIZE.small]: {
    fontSize: fontSizeS,
    lineHeight: lineHeightS,
    padding: css`
      padding: ${INDENT.xxxs} ${INDENT.xxs};
    `,
  },
  [BUTTON_SIZE.medium]: {
    fontSize: fontSizeM,
    lineHeight: lineHeightM,
    padding: css`
      padding: ${INDENT.xxxs} ${INDENT.xxs};
    `,
  },
  [BUTTON_SIZE.large]: {
    fontSize: fontSizeL,
    lineHeight: lineHeightL,
    padding: css`
      padding: ${INDENT.xxs} ${INDENT.s};
    `,
  },
};

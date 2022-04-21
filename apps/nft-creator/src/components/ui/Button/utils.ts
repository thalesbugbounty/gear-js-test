import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import {
  getBorder,
  getHoverBorder,
  getActiveBorder,
  getBorderRadius,
  getTypographyButtonActiveColor,
  getTypographyButtonColor,
  getTypographyButtonHoverColor,
  WithTheme,
} from '../../../styles';
import { BORDER_WIDTH, BUTTON_SIZE, SIZE_STYLE } from './constants';
import { ButtonProps, ButtonSize, SizeStyle } from './types';

const getButtonSizeStyle = (size: ButtonSize, style: SizeStyle = SIZE_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight, padding } = style[size];
  return css`
    ${fontSize}
    ${lineHeight}
    ${padding}
  `;
};

export const border = ({ theme, color }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getBorder({ theme, color, width: BORDER_WIDTH });
};

export const borderHover = ({ theme, color }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getHoverBorder({ theme, color, width: BORDER_WIDTH });
};

export const borderActive = ({ theme, color }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getActiveBorder({ theme, color, width: BORDER_WIDTH });
};

export const borderDisabled = ({ theme }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getBorder({ theme, color: 'disabled', width: BORDER_WIDTH });
};

export const borderRadius = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getBorderRadius(props);
};

export const size = ({ size = BUTTON_SIZE.medium }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    ${getButtonSizeStyle(size)}
  `;
};

export const textColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getTypographyButtonColor(props);
};

export const textHoverColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getTypographyButtonHoverColor(props);
};

export const textActiveColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getTypographyButtonActiveColor(props);
};

export const textDisabled = ({ theme }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return getTypographyButtonColor({ theme, color: 'disabled' });
};

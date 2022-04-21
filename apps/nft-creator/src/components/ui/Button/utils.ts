import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import {
  getBorder,
  getHoverBorder,
  getActiveBorder,
  getBorderRadius,
  WithTheme,
  getActivePalette,
  getHoverPalette,
  getButtonPalette,
  getPalette,
  INDENT,
} from '../../../styles';
import { BORDER_WIDTH, BUTTON_SIZE, SIZE_STYLE } from './constants';
import { ButtonProps, ButtonSize, SizeStyle } from './types';

const getButtonSizeStyle = (size: ButtonSize, style: SizeStyle = SIZE_STYLE): FlattenSimpleInterpolation => {
  const { fontSize, lineHeight } = style[size];
  return css`
    ${fontSize}
    ${lineHeight}
  `;
};

export const paddingOutlined = css`
  padding: ${INDENT.xxxs} ${INDENT.xxs};
`;

export const paddingContained = css`
  padding: ${INDENT.xxs} ${INDENT.xs};
`;

const getButtonColor = ({ theme, color = 'brand' }: WithTheme<ButtonProps>): string => {
  const palette = getButtonPalette(theme);
  return palette[color];
};

const getButtonHoverColor = ({ theme, color = 'brand' }: WithTheme<ButtonProps>): string => {
  const palette = getHoverPalette(theme);
  return palette[color];
};

const getButtonActiveColor = ({ theme, color = 'brand' }: WithTheme<ButtonProps>): string => {
  const palette = getActivePalette(theme);
  return palette[color];
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
  return css`
    color: ${getButtonColor(props)};
  `;
};

export const textContainedColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    color: ${getPalette(props.theme).basic.white};
  `;
};

export const textHoverColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    color: ${getButtonHoverColor(props)};
  `;
};

export const textActiveColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    color: ${getButtonActiveColor(props)};
  `;
};

export const textDisabled = ({ theme }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    color: ${getButtonColor({ theme, color: 'disabled' })};
  `;
};

export const bgColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    background-color: ${getButtonColor(props)};
  `;
};

export const bgHoverColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    background-color: ${getButtonHoverColor(props)};
  `;
};

export const bgActiveColor = (props: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    background-color: ${getButtonActiveColor(props)};
  `;
};

export const bgDisabled = ({ theme }: WithTheme<ButtonProps>): FlattenSimpleInterpolation => {
  return css`
    background-color: ${getButtonColor({ theme, color: 'disabled' })};
  `;
};

import styled from 'styled-components/macro';
import { background } from './constants';
import { ButtonProps } from './types';
import {
  size,
  border,
  borderRadius,
  textColor,
  borderHover,
  borderActive,
  textHoverColor,
  textActiveColor,
  borderDisabled,
  textDisabled,
} from './utils';

const ButtonComponent = styled.button<ButtonProps>`
  ${background};
  ${size};
  ${border};
  ${borderRadius};
  ${textColor};
  cursor: pointer;

  &:hover {
    ${borderHover};
    ${textHoverColor};
  }

  &:active {
    ${borderActive};
    ${textActiveColor};
  }

  &:disabled {
    ${borderDisabled};
    ${textDisabled};
    cursor: not-allowed;
  }
`;

export const ButtonOutlined: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

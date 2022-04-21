import styled from 'styled-components/macro';
import { BORDER_NONE } from './constants';
import { ButtonProps } from './types';
import {
  size,
  borderRadius,
  bgActiveColor,
  bgColor,
  bgDisabled,
  bgHoverColor,
  textContainedColor,
  paddingContained,
} from './utils';

const ButtonComponent = styled.button<ButtonProps>`
  ${BORDER_NONE};
  ${paddingContained}
  ${size};
  ${borderRadius};
  ${bgColor};
  ${textContainedColor};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    ${bgHoverColor};
  }

  &:active {
    ${bgActiveColor};
  }

  &:disabled {
    ${bgDisabled};
    cursor: not-allowed;
  }
`;

export const ButtonContained: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

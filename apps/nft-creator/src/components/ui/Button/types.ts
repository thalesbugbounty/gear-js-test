import { ButtonHTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { TypographyButtonColorName } from '../../../styles';
import { BUTTON_SIZE } from './constants';

export type ButtonSize = keyof typeof BUTTON_SIZE;
export type ButtonColorName = TypographyButtonColorName;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColorName;
};

export type SizeStyle = {
  [K in ButtonSize]: {
    fontSize: FlattenSimpleInterpolation;
    lineHeight: FlattenSimpleInterpolation;
    padding: FlattenSimpleInterpolation;
  };
};

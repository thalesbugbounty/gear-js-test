import { InputHTMLAttributes } from 'react';
import { InputColorName } from '../../../styles';
import { INPUT_SIZE } from './constants';

export type InputSize = typeof INPUT_SIZE[keyof typeof INPUT_SIZE];

export type SizeStyle = {
  [K in InputSize]: {
    padding: string;
    width: string;
    fontSize: string;
    lineHeight: string;
  };
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  color?: InputColorName;
  inputSize?: InputSize;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

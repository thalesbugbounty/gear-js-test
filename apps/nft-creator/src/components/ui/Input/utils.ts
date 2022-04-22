import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getActiveBorder, getBorder, getBorderRadius, outlineNone, WithTheme } from '../../../styles';
import { SIZE_STYLE } from './constants';
import { InputProps, InputSize } from './types';

const getSizeStyle = (size: InputSize): FlattenSimpleInterpolation => {
  const { padding, width } = SIZE_STYLE[size];
  return css`
    padding: ${padding};
    width: ${width};
  `;
};

const size = ({ inputSize = 'm' }: WithTheme<InputProps>): FlattenSimpleInterpolation => {
  return getSizeStyle(inputSize);
};

const border = ({ theme, color }: WithTheme<InputProps>): FlattenSimpleInterpolation => {
  return css`
    ${getBorder({ theme, width: 'm', color })};
  `;
};

const focusBorder = ({ theme, color }: WithTheme<InputProps>): FlattenSimpleInterpolation => {
  return getActiveBorder({ theme, width: 'm', color });
};

export const getCommonStyles = (props: WithTheme<InputProps>): FlattenSimpleInterpolation => {
  return css`
    ${border(props)};
    ${getBorderRadius('standart')}
    ${size(props)};
    ${outlineNone};

    &:focus {
      ${focusBorder(props)};
    }
  `;
};

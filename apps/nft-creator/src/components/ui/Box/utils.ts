import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getBorder, getBorderRadius, WithTheme } from '../../../styles';
import { BoxBorderedProps } from './types';

export const bodrerStyle = ({
  theme,
  borderColor: color,
  borderRadius: radius,
  borderWidth: width,
}: WithTheme<BoxBorderedProps>): FlattenSimpleInterpolation => {
  return css`
    ${getBorder({ theme, color, width })}
    ${getBorderRadius(radius)}
  `;
};

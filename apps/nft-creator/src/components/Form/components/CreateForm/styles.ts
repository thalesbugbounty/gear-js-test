import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getBackgroundPalette, getBorderRadius, hexToRgba, INDENT, WithTheme } from '../../../../styles';

export const formBg = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getBackgroundPalette(theme);

  return css`
    background-color: ${hexToRgba(palette.primary, 0.7)};
  `;
};

export const Form = styled.form`
  ${formBg};
  ${getBorderRadius()}
  width: 50%;
  min-width: 400px;
  padding: ${INDENT.xxs} ${INDENT.m};
`;

export const ButtonLoader = styled.div`
  display: flex;
  flex-wrap: nowrap;

  button {
    margin-right: ${INDENT.l};
  }
`;

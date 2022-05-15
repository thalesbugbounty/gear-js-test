import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getActivePalette, getBasicPalette, getBorderRadius, getHoverPalette, INDENT, WithTheme } from '../../styles';
import { ItemProps } from './types';

const backgroundNav = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getBasicPalette(theme);
  return css`
    background-color: ${palette.dark};
  `;
};

const itemColor = ({ checked, theme }: WithTheme<ItemProps>): FlattenSimpleInterpolation => {
  const basic = getBasicPalette(theme);
  const active = getActivePalette(theme);
  const color = checked ? active.dark : basic.dark;
  return css`
    background-color: ${color};
  `;
};

const itemHoverColor = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getHoverPalette(theme);
  return css`
    background-color: ${palette.dark};
  `;
};

export const Wrapper = styled.nav`
  ${backgroundNav}
  ${getBorderRadius()}
  padding: ${INDENT.xxxxs};
  position: absolute;
  right: 0;
  display: flex;
`;

export const Item = styled(Link)<ItemProps>`
  ${itemColor};
  padding: ${INDENT.xxs} ${INDENT.sm};
  margin-right: ${INDENT.xxxs};

  &:hover {
    ${itemHoverColor}
  }

  &:last-child {
    margin-right: ${INDENT.none};
  }
`;

import styled, { css } from 'styled-components/macro';
import { INDENT, WithTheme, Z_INDEX, getBorderPalette, BORDER_WIDTH, BORDER_TYPE } from '../../styles';

const border = ({ theme }: WithTheme) => {
  const palette = getBorderPalette(theme);
  return css`
    border-top: ${BORDER_WIDTH.s} ${BORDER_TYPE.solid} ${palette.dark};
  `;
};

export const Wrapper = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${INDENT.m};
  padding-bottom: ${INDENT.m};
  ${border};
  z-index: ${Z_INDEX.level1};
`;

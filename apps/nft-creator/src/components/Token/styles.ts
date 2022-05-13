import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getBasicPalette, getBorderRadius, hexToRgba, INDENT, TOKEN_IMG_HEIGHT, WithTheme } from '../../styles';

const nftBg = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getBasicPalette(theme);

  return css`
    background: linear-gradient(120deg, ${hexToRgba(palette.white, 0)} 20%, ${hexToRgba(palette.white, 0.05)} 75%);
  `;
};

export const Container = styled.article`
  ${nftBg};
  ${getBorderRadius()}
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  height: ${TOKEN_IMG_HEIGHT};
`;

export const Description = styled.div`
  padding-top: ${INDENT.m};
  padding-bottom: ${INDENT.m};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

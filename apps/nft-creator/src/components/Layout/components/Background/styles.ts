import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { getBackgroundPalette, getPalette, WithTheme, hexToRgba, Z_INDEX } from '../../../../styles';

const rectBg = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getPalette(theme);

  return css`
    background: linear-gradient(
      90deg,
      ${palette.background.primary} 0%,
      ${palette.special.eerieBlack} 50%,
      ${palette.background.primary} 100%
    );
  `;
};

const imgBg = ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  const palette = getBackgroundPalette(theme);

  return css`
    background: radial-gradient(
      circle,
      ${hexToRgba(palette.primary, 0)} 0%,
      ${hexToRgba(palette.primary, 1)} 65%,
      ${hexToRgba(palette.primary, 1)} 100%
    );
  `;
};

export const Wrapper = styled.div`
  position: absolute;
  max-height: 750px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${Z_INDEX.level0};
`;

export const Image = styled.img`
  position: absolute;
  min-height: 500px;
  height: 100%;
  margin: auto;
  display: block;
  z-index: ${Z_INDEX.level1};
`;

export const ImageGradient = styled.div`
  ${imgBg};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.level2};
`;

export const Rect = styled.div`
  ${rectBg};
  transform: skew(0deg, 20deg);
  height: 70%;
  min-height: 500px;
  width: 100%;
  z-index: ${Z_INDEX.level3};
  opacity: 0.9;
`;

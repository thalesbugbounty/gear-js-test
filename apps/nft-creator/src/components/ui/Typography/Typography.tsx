import styled, { css } from 'styled-components/macro';
import { TYPOGRAPHY_TAG } from './constants';
import { TypographyProps } from './types';
import { getFontStyle, getFontColor, getFontWeight, getFontFamily } from './utils';

export const typographyStyle = css<TypographyProps>`
  ${getFontFamily};
  ${getFontStyle};
  ${getFontColor};
  ${getFontWeight};
  margin: 0;
`;

const TypographyComponent = styled.p<TypographyProps>`
  ${typographyStyle}
`;

export const Typography: React.FC<TypographyProps> = ({ size, weight, color, tag, children, ...rest }) => {
  return (
    <TypographyComponent as={tag || TYPOGRAPHY_TAG.p} size={size} weight={weight} color={color} {...rest}>
      {children}
    </TypographyComponent>
  );
};

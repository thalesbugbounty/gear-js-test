import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';
import { fontWeightBold, RobotoFontFamily, baseStyles } from '.';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  body {
    ${baseStyles}
    ${RobotoFontFamily}
    ${fontWeightBold}
  }

  #root {
  }
`;

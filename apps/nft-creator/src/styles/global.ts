import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';
import { fontWeightBold, RobotoFontFamily, baseStyles, fontFace } from '.';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fontFace('Roboto', 'Roboto-Bold', 700)}
  ${fontFace('Roboto', 'Roboto-Regular', 400)}
  ${fontFace('Roboto', 'Roboto-Light', 300)}

  body {
    ${baseStyles}
    ${RobotoFontFamily}
    ${fontWeightBold}
  }

  #root {
  }
`;

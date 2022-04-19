import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';
import { fontWeightBold, fontWeightLight, fontWeightRegular, RobotoFontFamily, baseStyles, fontFace } from './';

export const Styles = createGlobalStyle`
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

import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  ${normalize}

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  #root {
  }
`;

import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';
import { baseStyles, reset } from '.';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  ${baseStyles}
`;

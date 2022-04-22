import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';
import { baseStyles } from '.';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}
  ${baseStyles}
`;

/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from './styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}

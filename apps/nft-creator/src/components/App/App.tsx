import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../constants/styles';
import { StoreProvider } from '../../stores';
import { Styles } from '../../styles';
import { Test } from '../Test/Test';
import { Test2 } from '../Test/Test2';

export const App = () => {
  console.log('render App');
  return (
    <StoreProvider>
      <ThemeProvider theme={lightTheme}>
        <Test />
        <Styles />
      </ThemeProvider>
    </StoreProvider>
  );
};

import { StoreProvider } from '../../stores';
import { ThemeProvider } from 'styled-components/macro';
import { lightTheme, GlobalStyle, darkTheme } from '../../styles';
import { BrowserRouter } from 'react-router-dom';
import Pages from '../../pages';
import './App.scss';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
};

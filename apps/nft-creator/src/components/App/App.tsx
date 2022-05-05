import { StoreProvider } from '../../stores';
import { ThemeProvider } from 'styled-components/macro';
import { lightTheme, GlobalStyle, darkTheme } from '../../styles';
import { BrowserRouter } from 'react-router-dom';
import Pages from '../../pages';
import { Layout } from '../Layout';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Layout isControl={true}>
            <Pages />
          </Layout>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
};

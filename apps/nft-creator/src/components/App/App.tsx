import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../constants/styles';
import { StoreProvider } from '../../stores';
import { Styles } from '../../styles';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={lightTheme}>
        <div>123</div>
        <Styles />
      </ThemeProvider>
    </StoreProvider>
  );
};

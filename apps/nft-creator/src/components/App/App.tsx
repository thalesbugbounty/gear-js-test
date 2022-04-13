import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../constants/styles';
import { Styles } from '../../styles';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <a href="2343"> sfsf</a>
          <img alt="sdafdsaf" />
        </header>
      </div>
      <Styles />
    </ThemeProvider>
  );
};

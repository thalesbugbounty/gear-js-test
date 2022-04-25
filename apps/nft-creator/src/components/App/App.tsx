import { StoreProvider } from '../../stores';
import styled, { ThemeProvider } from 'styled-components/macro';
import { lightTheme, GlobalStyle, darkTheme } from '../../styles';
import { ButtonOutlined } from '../ui/Button/ButtonOutlined';
import { ButtonContained } from '../ui/Button/ButtonContained';
import { BoxBordered } from '../ui/Box/BoxBordered';
import { Input } from '../ui/Input';
import { useEffect } from 'react';
import { fetchWasm } from '../../api/contract';

const Test = styled.div`
  border: 1px solid #deff22;
  width: 400px;
  height: 150px;
`;

export const App = () => {
  useEffect(() => {
    fetchWasm();
  }, []);

  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <ButtonOutlined
          onClick={() => {
            console.info('button click');
          }}
        >
          Button
        </ButtonOutlined>
        <ButtonContained
          onClick={() => {
            console.info('button click');
          }}
        >
          Button
        </ButtonContained>
        <BoxBordered borderColor="green" borderWidth="m" paddingLeft="20px">
          <div>13123</div>
          <div>13123</div>
          <div>13123</div>
          <div>13123</div>
        </BoxBordered>
        <Test />
        <Input
          inputSize="l"
          onChange={e => {
            console.info(e.target.value);
          }}
        />
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
};

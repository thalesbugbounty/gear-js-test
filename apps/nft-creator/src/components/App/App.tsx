import { StoreProvider } from '../../stores';
import styled, { ThemeProvider } from 'styled-components/macro';
import { Button } from '@gear-js/ui';
import { lightTheme, Styles, fontWeightLight, fontWeightNormal, fontWeightRegular } from '../../styles';

const Test = styled.div`
  /* font-family: Arial; */
  ${fontWeightRegular}
`;

const Test2 = styled.div`
  /* font-family: Arial; */
  ${fontWeightLight}
`;

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={lightTheme}>
        <Button
          text="Button"
          size="small"
          color="primary"
          icon="arrow"
          onClick={() => {
            console.log('lol');
          }}
        />
        <div>123 ARPPROkfjkfd sfgkfdjgFJFGj 0038384</div>
        <Test>123 ARPPROkfjkfd sfgkfdjgFJFGjsdfsd 0038384</Test>
        <Test2>123 ARPPROkfjkfd sfgkfdjgFJFGjsdfsd 0038384</Test2>
        <Styles />
      </ThemeProvider>
    </StoreProvider>
  );
};

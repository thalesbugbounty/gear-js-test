import { StoreProvider } from '../../stores';
import styled, { ThemeProvider } from 'styled-components/macro';
import { Button } from '@gear-js/ui';
import { lightTheme, GlobalStyle } from '../../styles';
import { Typography } from '../ui/Typography';
import { ButtonOutlined } from '../ui/Button/ButtonOutlined';
import { ButtonContained } from '../ui/Button/ButtonContained';

const Test1 = styled.span`
  padding: 20px 30px;
  border: 3px solid #ccc;
  box-sizing: border-box;
`;
const Test2 = styled.span`
  padding: 20px 30px;
  border: none;
  box-sizing: border-box;
`;

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={lightTheme}>
        <Test1>ssss</Test1>
        <Test2>ssss</Test2>
        <Button
          text="Button"
          size="small"
          color="primary"
          icon="arrow"
          onClick={() => {
            console.info('123');
          }}
        />
        <Typography weight="bold" color="danger">
          Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.
        </Typography>
        <Typography size="xs" color="secondary">
          Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.
        </Typography>
        <Typography size="m" color="primary" weight="light">
          Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.sddsfsdfdsf
        </Typography>
        <Typography size="m" color="warn" weight="light">
          Five big quacking zephyrs jolt my wax bed.
        </Typography>
        <GlobalStyle />
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
        <button>123123</button>
      </ThemeProvider>
    </StoreProvider>
  );
};

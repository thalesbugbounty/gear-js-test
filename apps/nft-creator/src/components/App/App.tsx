import { StoreProvider } from '../../stores';
import { ThemeProvider } from 'styled-components/macro';
import { Button } from '@gear-js/ui';
import { lightTheme, GlobalStyle } from '../../styles';
import { Typography } from '../ui/Typography';
import { ButtonOutlined } from '../ui/Button/ButtonOutlined';

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
        <button>123123</button>
      </ThemeProvider>
    </StoreProvider>
  );
};

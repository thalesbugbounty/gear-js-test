import { StoreProvider } from '../../stores';
import { ThemeProvider } from 'styled-components/macro';
import { Button } from '@gear-js/ui';
import { lightTheme, GlobalStyle } from '../../styles';
import { Typography } from '../ui/Typography';

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
            console.log('123');
          }}
        />
        <Typography weight="bold">Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.</Typography>
        <Typography size="xs" color="secondary">
          Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.
        </Typography>
        <Typography size="m" color="brand" weight="light">
          Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф.
        </Typography>
        <Typography size="m" color="brand" weight="light">
          Five big quacking zephyrs jolt my wax bed.
        </Typography>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
};

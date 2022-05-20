import { Footer } from '../Footer';
import { Header } from '../Header';
import { Background } from './components/Background';
import { Outlet } from 'react-router-dom';
import * as S from './styles';
import { useApiStore } from '../../stores';
import { Spinner } from '../Spinner';
import { Typography } from '../ui/Typography';
import { observer } from 'mobx-react-lite';

export const Layout = observer(() => {
  const {
    isApiReady,
    apiLoader: { isLoading },
  } = useApiStore();

  return (
    <S.Wrapper>
      <Background />
      <Header />
      <S.Main>
        {!isApiReady && isLoading && <Spinner size="large" status="Api loading" />}
        {!isLoading && isApiReady && <Outlet />}
        {!isLoading && !isApiReady && (
          <Typography color="danger" size="l">
            Api not loaded!
          </Typography>
        )}
      </S.Main>
      <Footer />
    </S.Wrapper>
  );
});

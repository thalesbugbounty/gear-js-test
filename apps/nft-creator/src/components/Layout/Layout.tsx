import { Footer } from '../Footer';
import { Header } from '../Header';
import { Background } from './components/Background';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

export const Layout = () => (
  <S.Wrapper>
    <Background />
    <Header />
    <S.Main>
      <Outlet />
    </S.Main>
    <Footer />
  </S.Wrapper>
);

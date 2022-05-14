import { Outlet } from 'react-router-dom';
import * as S from './styles';

export const Main = () => (
  <S.Wrapper>
    <Outlet />
  </S.Wrapper>
);

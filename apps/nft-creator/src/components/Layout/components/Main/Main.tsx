import { Outlet } from 'react-router-dom';
import { NftNav } from '../../../NftNav';
import * as S from './styles';

export const Main = () => (
  <S.Wrapper>
    <NftNav prefix="nfts" />
    <Outlet />
  </S.Wrapper>
);

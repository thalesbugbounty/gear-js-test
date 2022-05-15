import { useEffect } from 'react';
import { useApiStore, useNftStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { Outlet } from 'react-router-dom';

export const Nfts = observer(() => {
  const { isApiReady } = useApiStore();
  const { loadProgramState } = useNftStore();
  useEffect(() => {
    if (isApiReady) {
      loadProgramState();
    }
  }, [isApiReady, loadProgramState]);

  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
});

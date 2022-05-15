import { useEffect } from 'react';
import { useApiStore, useNftStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { NftsList } from '../../components/NftsList';
import { Title } from '../../components/Title';

export const Main = observer(() => {
  const { isApiReady } = useApiStore();
  const { loadProgramState, tokens } = useNftStore();
  useEffect(() => {
    if (isApiReady) {
      loadProgramState();
    }
  }, [isApiReady, loadProgramState]);

  return (
    <S.Wrapper>
      <Title title="All NFT's" />
      <NftsList tokens={tokens} />
    </S.Wrapper>
  );
});

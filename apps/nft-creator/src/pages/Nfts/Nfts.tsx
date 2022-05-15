import { useEffect } from 'react';
import { useApiStore, useNftStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { Typography } from '../../components/ui/Typography';
import { NftsList } from './components/NftsList';

export const Nfts = observer(() => {
  const { isApiReady } = useApiStore();
  const { loadProgramState, tokens } = useNftStore();
  useEffect(() => {
    if (isApiReady) {
      loadProgramState();
    }
  }, [isApiReady, loadProgramState]);

  return (
    <S.Wrapper>
      <Typography tag="h1">Nfts</Typography>
      <NftsList tokens={tokens} />
    </S.Wrapper>
  );
});

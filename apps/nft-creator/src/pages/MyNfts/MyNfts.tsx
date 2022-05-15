import { observer } from 'mobx-react-lite';
import { Title } from '../../components/Title';
import { useNftStore } from '../../stores';
import { NftsList } from '../../components/NftsList';
import * as S from './styles';

export const MyNfts = observer(() => {
  const { tokens } = useNftStore();

  return (
    <S.Wrapper>
      <Title title="My NFT's" />
      <NftsList tokens={tokens} />
    </S.Wrapper>
  );
});

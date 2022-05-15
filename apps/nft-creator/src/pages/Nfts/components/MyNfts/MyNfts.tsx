import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../../../stores';
import { NftsList } from '../NftsList';

export const MyNfts = observer(() => {
  const { tokens } = useNftStore();

  return <NftsList tokens={tokens} />;
});

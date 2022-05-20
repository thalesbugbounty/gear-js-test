import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const AllTab = observer(() => {
  const { tokens, tokensLoader, readAllTokens, reset } = useNftStore();

  useEffect(() => {
    readAllTokens();

    return () => {
      reset();
    };
  }, [readAllTokens, reset]);

  return (
    <>
      {tokensLoader.isLoading && <Spinner size="medium" />}
      {!tokensLoader.isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

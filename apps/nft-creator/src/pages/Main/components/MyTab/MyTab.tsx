import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const MyTab = observer(() => {
  const { tokens, tokensLoader, readMyTokens, reset } = useNftStore();

  useEffect(() => {
    readMyTokens();

    return () => {
      reset();
    };
  }, [readMyTokens, reset]);

  return (
    <>
      {tokensLoader.isLoading && <Spinner size="medium" />}
      {!tokensLoader.isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

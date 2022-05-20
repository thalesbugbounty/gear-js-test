import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const ApprovedTab = observer(() => {
  const { tokens, tokensLoader, readApprovedTokens, reset } = useNftStore();

  useEffect(() => {
    readApprovedTokens();

    return () => {
      reset();
    };
  }, [readApprovedTokens, reset]);

  return (
    <>
      {tokensLoader.isLoading && <Spinner size="medium" />}
      {!tokensLoader.isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const ApprovedTab = observer(() => {
  const {
    tokens,
    readLoader: { isLoading },
    readApprovedTokens,
    reset,
  } = useNftStore();

  useEffect(() => {
    readApprovedTokens();

    return () => {
      reset();
    };
  }, [readApprovedTokens, reset]);

  return (
    <>
      {isLoading && <Spinner size="medium" />}
      {!isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

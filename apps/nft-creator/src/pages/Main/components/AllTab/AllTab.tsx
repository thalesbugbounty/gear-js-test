import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const AllTab = observer(() => {
  const {
    tokens,
    readLoader: { isLoading },
    readAllTokens,
    reset,
  } = useNftStore();

  useEffect(() => {
    readAllTokens();

    return () => {
      reset();
    };
  }, [readAllTokens, reset]);

  return (
    <>
      {isLoading && <Spinner size="medium" />}
      {!isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { NftsList } from '../../../../components/NftsList';
import { Spinner } from '../../../../components/Spinner';
import { useNftStore } from '../../../../stores';

export const MyTab = observer(() => {
  const {
    tokens,
    readLoader: { isLoading },
    readMyTokens,
    reset,
  } = useNftStore();

  useEffect(() => {
    readMyTokens();

    return () => {
      reset();
    };
  }, [readMyTokens, reset]);

  return (
    <>
      {isLoading && <Spinner size="medium" />}
      {!isLoading && <NftsList tokens={tokens} />}
    </>
  );
});

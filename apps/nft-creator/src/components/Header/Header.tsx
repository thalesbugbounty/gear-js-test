import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useApiStore } from '../../stores/hooks/useApiStore';
import { BoxBordered } from '../ui/Box';

export const Header = observer(() => {
  const { isApiReady, fetchWasm, meta } = useApiStore();

  useEffect(() => {
    if (isApiReady) {
      fetchWasm();
    }
  }, [fetchWasm, isApiReady]);

  console.log('Api: ', isApiReady);
  console.log('Meta: ', meta);

  return (
    <BoxBordered cols={12} tag="header" borderRadius="none" borderColor="brand">
      {isApiReady ? 'Ready' : 'ApiLoading...'}
    </BoxBordered>
  );
});

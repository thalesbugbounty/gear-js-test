import { Input } from '@gear-js/ui';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useAccountStore } from '../../stores';
import { useApiStore } from '../../stores/hooks/useApiStore';
import { BoxBordered } from '../ui/Box';
import { Typography } from '../ui/Typography';

export const Header = observer(() => {
  const { isApiReady, calculateGas, meta } = useApiStore();
  const { currentAccountAddress, updateAddress } = useAccountStore();

  useEffect(() => {
    if (isApiReady) {
      calculateGas();
    }
  }, [calculateGas, isApiReady]);

  console.log('Api: ', isApiReady);
  console.log('Meta: ', meta);
  console.log('Account: ', currentAccountAddress);

  return (
    <BoxBordered cols={12} tag="header" borderRadius="none" borderColor="brand">
      {isApiReady ? 'Ready' : 'ApiLoading...'}
      <Typography size="m" tag="h1">
        {currentAccountAddress}
      </Typography>
      <Input
        onChange={e => {
          updateAddress(e.target.value);
        }}
        value={currentAccountAddress || ''}
      />
    </BoxBordered>
  );
});

import { Outlet } from 'react-router-dom';
import { NftNav } from '../../components/NftNav';
import { Box } from '../../components/ui/Box';
import { useEffect } from 'react';
import { useApiStore, useNftStore } from '../../stores';
import { observer } from 'mobx-react-lite';

export const Nfts = observer(() => {
  const { isApiReady } = useApiStore();
  const { loadProgramState } = useNftStore();
  useEffect(() => {
    if (isApiReady) {
      loadProgramState();
    }
  }, [isApiReady, loadProgramState]);

  return (
    <Box>
      Nfts
      <NftNav />
      <Outlet />
    </Box>
  );
});

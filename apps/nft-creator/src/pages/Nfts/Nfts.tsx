import { Outlet } from 'react-router-dom';
import { NftNav } from '../../components/NftNav';
import { BoxBordered } from '../../components/ui/Box';

export const Nfts = () => {
  return (
    <BoxBordered borderColor="success" borderRadius="none">
      Nfts
      <NftNav />
      <Outlet />
    </BoxBordered>
  );
};

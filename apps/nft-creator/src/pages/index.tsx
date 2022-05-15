import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Nft } from './Nft';
import { Nfts } from './Nfts';
import { NotFound } from './NotFound';
import { NftPages } from './constants';
import { MyNfts } from './Nfts/components/MyNfts';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Nfts />} />
        <Route path="nfts">
          <Route path=":id" element={<Nft />} />
          <Route path={NftPages.my} element={<MyNfts />} />
          <Route path={NftPages.approved} element={<Nft />} />
          <Route path={NftPages.create} element={<Nft />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

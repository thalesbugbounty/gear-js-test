import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Nft } from './Nft';
import { Nfts } from './Nfts';
import { Main } from './Main';
import { NotFound } from './NotFound';
import { NftPages } from './constants';
import { MyNfts } from './Nfts/components/MyNfts';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout isControl={true} />}>
        <Route index element={<Main />} />
        <Route path="nfts" element={<Nfts />}>
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

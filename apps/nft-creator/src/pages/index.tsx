import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Nft } from './Nft';
import { Nfts } from './Nfts';
import { NotFound } from './NotFound';
import { NftPages } from './constants';
import { MyNfts } from './MyNfts';
import { Create } from './Create';
import { Main } from './Main';
import { ApprovedNfts } from './ApprovedNfts';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="nfts" element={<Nfts />}>
          <Route path=":id" element={<Nft />} />
          <Route path={NftPages.my} element={<MyNfts />} />
          <Route path={NftPages.approved} element={<ApprovedNfts />} />
          <Route path={NftPages.create} element={<Create />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

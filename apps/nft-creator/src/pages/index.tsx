import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Nft } from './Nft';
import { NotFound } from './NotFound';
import { Create } from './Create';
import { Main } from './Main';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="create" element={<Create />} />
        <Route path="nft/:id" element={<Nft />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

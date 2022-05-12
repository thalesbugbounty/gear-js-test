import { useParams } from 'react-router-dom';
import { BoxBordered } from '../../components/ui/Box';

export const Nft = () => {
  const { id } = useParams<{ id?: string }>();
  return (
    <BoxBordered borderColor="success" borderRadius="none">
      Nft #{id}
    </BoxBordered>
  );
};

import { useParams } from 'react-router-dom';
import { Title } from '../../components/Title';
import * as S from './styles';

export const Nft = () => {
  const { id } = useParams<{ id?: string }>();
  return (
    <S.Wrapper>
      <Title title={`NFT #${id}`} />
    </S.Wrapper>
  );
};

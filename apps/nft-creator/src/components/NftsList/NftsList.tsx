import { Link } from 'react-router-dom';
import { Token as Item } from '../Token';
import { Token } from '../../stores/types';
import * as S from './styles';

type Props = {
  tokens: Token[];
};

export const NftsList: React.FC<Props> = ({ tokens }) => (
  <S.Wrapper>
    {tokens.map(({ id, name, media }) => (
      <S.Item key={id}>
        <Link to={`nft/${id}`}>
          <Item id={id} image={media} name={name} />
        </Link>
      </S.Item>
    ))}
  </S.Wrapper>
);

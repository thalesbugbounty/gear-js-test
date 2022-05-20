import { Link } from 'react-router-dom';
import { Token as Item } from '../Token';
import { Token } from '../../stores/types';
import * as S from './styles';
import { Typography } from '../ui/Typography';
import { memo } from 'react';

type Props = {
  tokens: Token[];
};

export const NftsList: React.FC<Props> = memo(({ tokens }) => {
  return (
    <S.NftsList>
      {!tokens.length && <Typography color="secondary">Tokens not found</Typography>}
      {!!tokens.length &&
        tokens.map(({ id, name, media }) => (
          <S.Item key={id}>
            <Link to={`/nft/${id}`}>
              <Item id={id} image={media} name={name} />
            </Link>
          </S.Item>
        ))}
    </S.NftsList>
  );
});

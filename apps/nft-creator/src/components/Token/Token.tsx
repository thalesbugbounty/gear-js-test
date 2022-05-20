import { Typography } from '../ui/Typography';
import * as S from './styles';
import tokenImage from '../../assets/token-example.png';

type Props = {
  id: string;
  name: string;
  image: string;
};

export const Token: React.FC<Props> = ({ id, image, name }) => {
  return (
    <S.Token>
      <S.Image src={tokenImage} />
      <S.Description>
        <Typography size="l" tag="h3" weight="bold">
          {name}
        </Typography>
        <Typography size="m" tag="h4" color="secondary">
          #{id}
        </Typography>
      </S.Description>
    </S.Token>
  );
};

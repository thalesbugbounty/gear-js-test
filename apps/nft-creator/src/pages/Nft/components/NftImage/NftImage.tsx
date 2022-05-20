import { TokenStyle } from '../../../../components/Token';
import * as S from './styles';
import tokenImage from '../../../../assets/token-example.png';

type Props = {
  image: string;
};

export const NftImage: React.FC<Props> = ({ image, ...rest }) => (
  <TokenStyle {...rest}>
    <S.Image src={tokenImage} />
  </TokenStyle>
);

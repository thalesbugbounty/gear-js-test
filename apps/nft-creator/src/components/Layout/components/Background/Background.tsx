import * as S from './styles';
import bg from '../../../../assets/bg.png';

export const Background = () => (
  <S.Wrapper>
    <S.ImageGradient />
    <S.Image src={bg} />
    <S.Rect />
  </S.Wrapper>
);

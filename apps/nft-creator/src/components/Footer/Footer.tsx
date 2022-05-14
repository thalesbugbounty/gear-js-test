import { Typography } from '../ui/Typography';
import { Socials } from './Socials';
import * as S from './styles';

export const Footer = () => (
  <S.Wrapper>
    <Socials />
    <Typography color="secondary" size="s">
      {new Date().getFullYear()}. All rights reserved.
    </Typography>
  </S.Wrapper>
);

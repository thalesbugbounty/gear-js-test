import { CreateForm } from '../../components/Form';
import { Title } from '../../components/Title';
import * as S from './styles';

export const Create = () => (
  <S.Wrapper>
    <Title title="Create" />
    <CreateForm />
  </S.Wrapper>
);

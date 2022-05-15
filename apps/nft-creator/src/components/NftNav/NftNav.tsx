import { useLocation } from 'react-router-dom';
import { NftPages } from '../../pages/constants';
import * as S from './styled';

type Props = {
  prefix?: string;
};

export const NftNav: React.FC<Props> = ({ prefix }) => {
  const { pathname } = useLocation();
  return (
    <S.Wrapper>
      {Object.keys(NftPages).map(page => {
        const to = `/${prefix || ''}/${page}`;
        const checked = pathname === to;
        return (
          <S.Item checked={checked} to={to} key={page}>
            {page}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};

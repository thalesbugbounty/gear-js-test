import * as S from './styles';
import { SpinnerSize } from './types';
import { getFontSize, getIconSize } from './utils';

type Props = {
  status?: string;
  size?: SpinnerSize;
};

export const Spinner: React.FC<Props> = ({ status, size = 'small' }) => (
  <S.Spinner>
    <S.Icon width={getIconSize(size)} />
    {status && <S.Status size={getFontSize(size)}>{status}...</S.Status>}
  </S.Spinner>
);

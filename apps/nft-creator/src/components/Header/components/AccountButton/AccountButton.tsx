import { memo } from 'react';
import IdentIcon from '@polkadot/react-identicon';
import { ButtonContained } from '../../../ui/Button';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import * as S from './styles';

type Props = {
  account: InjectedAccountWithMeta;
  onClick: () => void;
};

export const AccountButton: React.FC<Props> = memo(({ account, onClick }) => {
  return (
    <ButtonContained onClick={onClick} color="dark">
      <S.Content>
        <IdentIcon value={account.address} theme="polkadot" size={28} />
        <S.Text>{account.meta.name}</S.Text>
      </S.Content>
    </ButtonContained>
  );
});

import { observer } from 'mobx-react-lite';
import { useAccountStore } from '../../../../stores';
import * as S from './styles';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

type Props = {
  onChange: () => void;
};

export const Accounts: React.FC<Props> = observer(({ onChange }) => {
  const { accounts, updateAccount } = useAccountStore();

  const onClickHandle = (account: InjectedAccountWithMeta) => {
    updateAccount(account);
    onChange();
  };

  return (
    <S.Accounts>
      {accounts.map(account => (
        <S.Button key={account.address} account={account} onClick={() => onClickHandle(account)} />
      ))}
    </S.Accounts>
  );
});

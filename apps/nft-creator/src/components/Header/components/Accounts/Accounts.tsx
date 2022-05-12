import { observer } from 'mobx-react-lite';
import { useAccountStore } from '../../../../stores';
import { AccountButton } from '../AccountButton';
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
    <>
      {accounts.map(account => (
        <AccountButton key={account.address} account={account} onClick={() => onClickHandle(account)} />
      ))}
    </>
  );
});

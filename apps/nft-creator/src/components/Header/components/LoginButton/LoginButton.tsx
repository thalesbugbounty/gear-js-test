import { Button } from '@gear-js/ui';
import { observer } from 'mobx-react-lite';
import { useAccountStore } from '../../../../stores';
import { AccountButton } from '../AccountButton';
import userIcon from '../../../../assets/user.svg';

type Props = {
  onClick: () => void;
};

export const LoginButton: React.FC<Props> = observer(({ onClick }) => {
  const { currentAccount } = useAccountStore();

  return currentAccount ? (
    <AccountButton account={currentAccount} onClick={onClick} />
  ) : (
    <Button icon={userIcon} text="Sign in" color="secondary" onClick={onClick} />
  );
});

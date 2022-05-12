import { Button } from '@gear-js/ui';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from '../../../../stores';

export const CollectionButton = observer(() => {
  const { accountId } = useAccountStore();
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/nfts');
  };

  return <Button text="My collection" onClick={onClickHandler} disabled={!accountId} />;
});

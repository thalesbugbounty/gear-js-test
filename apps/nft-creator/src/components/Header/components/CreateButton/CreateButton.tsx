import { Button } from '@gear-js/ui';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from '../../../../stores';

export const CreateButton = observer(props => {
  const { accountId } = useAccountStore();
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/create');
  };

  return <Button text="Create" onClick={onClickHandler} disabled={!accountId} {...props} />;
});

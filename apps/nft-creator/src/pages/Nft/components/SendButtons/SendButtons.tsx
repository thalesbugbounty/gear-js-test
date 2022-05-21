import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../../../stores';
import { ApproveButton } from '../ApproveButton';
import { TransferButton } from '../TransferButton';
import * as S from './styles';

export const SendButtons = observer(() => {
  const { isAvailableForApprove, isAvailableForTransfer } = useNftStore();

  return (
    <S.SendButtons>
      {isAvailableForTransfer && <TransferButton />}
      {isAvailableForApprove && <ApproveButton />}
    </S.SendButtons>
  );
});

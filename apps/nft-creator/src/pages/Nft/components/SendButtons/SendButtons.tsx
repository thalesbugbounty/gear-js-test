import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../../../stores';
import { ApproveButton } from '../ApproveButton';
import { TransferButton } from '../TransferButton';
import * as S from './styles';

export const SendButtons = observer(() => {
  const { isApproved, isOwner } = useNftStore();

  return (
    <S.SendButtons>
      {(isApproved || isOwner) && <TransferButton />}
      {isApproved && <ApproveButton />}
    </S.SendButtons>
  );
});

import { Modal } from '@gear-js/ui';
import { Accounts } from '../Accounts';

type Props = {
  onClose: () => void;
};

export const LoginModal: React.FC<Props> = ({ onClose }) => {
  return (
    <Modal close={onClose} heading="Connect">
      <Accounts onChange={onClose} />
    </Modal>
  );
};

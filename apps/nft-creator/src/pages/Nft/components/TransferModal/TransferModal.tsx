import { Modal } from '@gear-js/ui';
import { TransferForm } from '../../../../components/Form/components/TransferForm';

type Props = {
  close: () => void;
};

export const TransferModal: React.FC<Props> = ({ close }) => (
  <Modal close={close} heading="transfer token">
    <TransferForm />
  </Modal>
);

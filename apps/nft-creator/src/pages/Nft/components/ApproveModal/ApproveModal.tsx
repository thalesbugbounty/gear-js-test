import { Modal } from '@gear-js/ui';
import { ApproveForm } from '../../../../components/Form/components/ApproveForm';

type Props = {
  close: () => void;
};

export const ApproveModal: React.FC<Props> = ({ close }) => (
  <Modal close={close} heading="Approve token">
    <ApproveForm />
  </Modal>
);

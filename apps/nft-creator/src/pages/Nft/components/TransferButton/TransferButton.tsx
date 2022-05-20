import { Button } from '@gear-js/ui';
import { useState } from 'react';
import { TransferModal } from '../TransferModal';

export const TransferButton = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button onClick={openModal} text="Transfer" color="secondary" />
      {isOpenModal && <TransferModal close={closeModal} />}
    </>
  );
};

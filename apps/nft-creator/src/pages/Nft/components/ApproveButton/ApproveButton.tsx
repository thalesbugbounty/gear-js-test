import { Button } from '@gear-js/ui';
import { useState } from 'react';
import { ApproveModal } from '../ApproveModal';

export const ApproveButton = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button onClick={openModal} text="Approve" />
      {isOpenModal && <ApproveModal close={closeModal} />}
    </>
  );
};

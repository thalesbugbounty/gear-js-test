import { useState } from 'react';
import { LoginButton } from '../LoginButton';
import { LoginModal } from '../LoginModal/LoginModal';

export const Login = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <LoginButton onClick={openModal} />
      {isOpenModal && <LoginModal onClose={closeModal} />}
    </>
  );
};

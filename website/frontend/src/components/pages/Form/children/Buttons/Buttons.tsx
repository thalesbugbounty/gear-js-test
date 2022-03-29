import React from 'react';
import { Button } from '@gear-js/ui';
import styles from './Buttons.module.scss';

type Props = {
  calculateGas: () => void;
};

const Buttons = ({ calculateGas }: Props) => {
  return (
    <div className={styles.buttons}>
      {/* omit type='button' after gear-ui update */}
      <Button text="Calculate gas" color="secondary" type="button" onClick={calculateGas} />
      <Button text="Send message" type="submit" />
    </div>
  );
};

export { Buttons };

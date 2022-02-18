import React from 'react';
import { Alert } from './Alert/Alert';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
  return (
    <ul className={styles.dropdown}>
      <Alert />
      <Alert />
      <Alert />
    </ul>
  );
};

export { Dropdown };

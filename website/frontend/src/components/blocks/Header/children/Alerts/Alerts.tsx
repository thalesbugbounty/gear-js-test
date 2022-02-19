import React from 'react';
import { Button } from './Button/Button';
import { Dropdown } from './Dropdown/Dropdown';
import styles from './Alerts.module.scss';

const Alerts = () => {
  return (
    <div className={styles.alerts}>
      <Button />
      <Dropdown className={styles.dropdown} />
    </div>
  );
};

export { Alerts };

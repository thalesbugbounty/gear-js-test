import React from 'react';
import { Icon } from 'components/blocks/Header/children/Alerts/Dropdown/Alert/Icon/Icon';
import styles from './Alert.module.scss';

const Alert = () => {
  return (
    <li className={styles.alert}>
      <header className={styles.header}>
        <Icon />
        Machine is offline
      </header>
      <div className={styles.body}>
        There has no connection with machine “WIN-GI43244” for 649 days. Backups of this machine are stopped. Please
        restore the connection with the machine to resume backups.
      </div>
      <footer className={styles.footer}>2021-08-04T09:24:06.088Z</footer>
    </li>
  );
};

export { Alert };

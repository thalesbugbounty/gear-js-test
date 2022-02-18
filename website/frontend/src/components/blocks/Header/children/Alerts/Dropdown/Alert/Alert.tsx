import React from 'react';
import { Icon } from './Icon/Icon';
import styles from './Alert.module.scss';

const Alert = () => {
  return (
    <li className={styles.alert}>
      <header className={styles.header}>
        <Icon />
        InitFailure
      </header>
      <div className={styles.body}>0x1848858f8fdc9cd3f84d47906effef0a0f211df1325f6352eb52ed41271234678501234567890</div>
      <footer className={styles.footer}>2021-08-04T09:24:06.088Z</footer>
    </li>
  );
};

export { Alert };

import React from 'react';
import clsx from 'clsx';
import { Alert } from './Alert/Alert';
import styles from './Dropdown.module.scss';

type Props = {
  className: string;
};

const Dropdown = ({ className }: Props) => {
  const wrapperClassName = clsx(styles.wrapper, className);

  return (
    // we are using wrapper to preserve extra space on top of dropdown while hover
    <div className={wrapperClassName}>
      <ul className={styles.dropdown}>
        <Alert />
        <Alert />
        <Alert />
      </ul>
    </div>
  );
};

export { Dropdown };

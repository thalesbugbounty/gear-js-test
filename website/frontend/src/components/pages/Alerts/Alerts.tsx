import React from 'react';
import clsx from 'clsx';
import { Alert } from './Alert/Alert';
import { Counter } from './Counter/Counter';
import styles from './Alerts.module.scss';

import { useDispatch } from 'react-redux';
import { AddAlert } from 'store/actions/actions';
import { EventTypes } from 'types/events';

const Alerts = () => {
  const dispatch = useDispatch();

  return (
    <div className={clsx('wrapper', styles.alerts)}>
      <header className={styles.header}>
        <h2
          className={styles.heading}
          onClick={() => {
            dispatch(AddAlert({ message: 'alert', type: EventTypes.SUCCESS }));
          }}
        >
          All alerts
        </h2>
        <Counter value={24} />
      </header>
      <ul className={styles.list}>
        <Alert />
        <Alert />
        <Alert />
        <Alert />
        <Alert />
        <Alert />
      </ul>
    </div>
  );
};

export { Alerts };

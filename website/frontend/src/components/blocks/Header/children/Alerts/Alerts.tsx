import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { routes } from 'routes';
import { RootState } from 'store/reducers';
import Bell from 'assets/images/bell.svg';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import styles from './Alerts.module.scss';

const Alerts = () => {
  // TOFIX: countUnread type to be number not number | null;
  const { countUnread } = useSelector((state: RootState) => state.notifications);
  const unreadAmount = Number(countUnread);
  const isAnyAlert = unreadAmount > 0;
  const className = clsx('img-wrapper', styles.button);

  return (
    <div className={styles.alerts}>
      <Link to={routes.notifications} className={className}>
        {isAnyAlert && <Counter value={unreadAmount} />}
        <img src={Bell} alt="alerts" />
      </Link>
      <Dropdown className={styles.dropdown} />
    </div>
  );
};

export { Alerts };

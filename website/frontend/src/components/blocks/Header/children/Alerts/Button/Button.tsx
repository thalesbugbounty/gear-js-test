import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Bell from 'assets/images/bell.svg';
import { routes } from 'routes';
import { Counter } from './Counter/Counter';
import styles from './Button.module.scss';

const Button = () => {
  const unreadAmount = 2;
  const isAnyAlert = unreadAmount > 0;
  const className = clsx('img-wrapper', styles.button);

  return (
    <Link to={routes.alerts} className={className}>
      {isAnyAlert && <Counter value={unreadAmount} />}
      <img src={Bell} alt="alerts" />
    </Link>
  );
};

export { Button };

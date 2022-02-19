import React, { useEffect, FC } from 'react';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { getLastItem } from 'helpers';
import { RootState } from 'store/reducers';
import { AlertModel } from 'types/events';

export const Alert: FC = () => {
  const alertApi = useAlert();
  const alert = useSelector(({ alerts }: RootState) => getLastItem(alerts) as AlertModel);

  useEffect(() => {
    if (alert) {
      const { message, type } = alert;
      alertApi.show(message, { type });
    }
  }, [alertApi, alert]);

  return <></>;
};

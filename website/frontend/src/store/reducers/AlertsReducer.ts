import { AlertModel } from '../../types/events';

export enum AlertsActionTypes {
  ADD_ALERT = 'ADD_ALERT',
}

interface AddAlertAction {
  type: AlertsActionTypes.ADD_ALERT;
  payload: AlertModel;
}

export type AlertsAction = AddAlertAction;

const initState: AlertModel[] = [];

const AlertsReducer = (state = initState, action: AlertsAction) => {
  switch (action.type) {
    case AlertsActionTypes.ADD_ALERT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default AlertsReducer;

import { Hex } from '@gear-js/api';

const vars = process.env;

export const BASE_API_URL = vars.REACT_APP_BASE_API_URL;
export const NODE_ADDRESS = vars.REACT_APP_NODE_ADDRESS;
export const PROGRAMM_ID = !!vars.REACT_APP_PROGRAMM_ID ? (vars.REACT_APP_PROGRAMM_ID as Hex) : undefined;

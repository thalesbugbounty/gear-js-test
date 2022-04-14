import { createContext } from 'react';
import RootStore, { Store } from './Store';

export const StoreContext = createContext<Store>(RootStore);

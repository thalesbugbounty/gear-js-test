import { useContext } from 'react';
import { Store } from '../Store';
import { StoreContext } from '../StoreContext';

export const useStores = () => useContext<Store>(StoreContext);

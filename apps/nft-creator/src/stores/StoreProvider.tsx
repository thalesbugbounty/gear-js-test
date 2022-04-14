import RootStore from './Store';
import { StoreContext } from './StoreContext';

export const StoreProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  return <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>;
};

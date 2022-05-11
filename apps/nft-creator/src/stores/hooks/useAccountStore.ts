import { useStores } from './useStores';

export const useAccountStore = () => {
  return useStores().account;
};

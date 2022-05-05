import { useStores } from './useStores';

export const useApiStore = () => {
  return useStores().api;
};

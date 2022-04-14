import { useStores } from './useStores';

export const useNftStore = () => {
  return useStores().nft;
};

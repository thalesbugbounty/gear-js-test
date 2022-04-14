import { NftStore } from './Nft/NftStore';

export class Store {
  nft: NftStore;

  constructor() {
    this.nft = new NftStore();
  }
}

export default new Store();

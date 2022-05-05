import { ApiStore } from './Api/ApiStore';
import { NftStore } from './Nft/NftStore';

export class Store {
  nft: NftStore;

  api: ApiStore;

  constructor() {
    this.nft = new NftStore(this);
    this.api = new ApiStore(this);
  }
}

export default new Store();

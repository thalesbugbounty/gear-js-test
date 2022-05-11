import { AccountStore } from './Account/AccountStore';
import { ApiStore } from './Api/ApiStore';
import { LocalStorageStore } from './LocalStorage/LocalStorageStore';
import { NftStore } from './Nft/NftStore';

export class Store {
  nft: NftStore;

  api: ApiStore;

  localStorage: LocalStorageStore;

  account: AccountStore;

  constructor() {
    this.nft = new NftStore(this);
    this.api = new ApiStore(this);
    this.localStorage = new LocalStorageStore();
    this.account = new AccountStore(this);
  }
}

export default new Store();

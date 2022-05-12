import { autorun } from 'mobx';
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
    this.account = new AccountStore(this);
    this.localStorage = new LocalStorageStore();
  }
}

const store = new Store();

autorun(() => {
  console.log('AUTORUN');
  store.api.initApi();
  store.api.fetchMetaWasm();
  store.api.fetchOptWasm();

  store.account.checkAccounts();

  // store.api.readStateOfProgramm();
});

export default store;

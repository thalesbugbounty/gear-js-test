import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { GearKeyring, Hex } from '@gear-js/api';

export class AccountStore extends BaseStore {
  public accounts: InjectedAccountWithMeta[];

  public currentAccountAddress: string | null;

  public isInjectedExtensions: boolean;

  constructor(rootStore: Store) {
    super(rootStore);

    this.accounts = [];
    this.currentAccountAddress = this.store.localStorage.account.getData();
    this.isInjectedExtensions = false;
    this.checkAccounts = this.checkAccounts.bind(this);

    makeObservable(this, {
      accounts: observable,
      currentAccountAddress: observable,
      isInjectedExtensions: observable,
      updateAddress: action.bound,
      accountId: computed,
    });

    this.checkAccounts();
  }

  get accountId(): Hex | null {
    return !!this.currentAccountAddress ? GearKeyring.decodeAddress(this.currentAccountAddress) : null;
  }

  public updateAddress(address: string) {
    this.currentAccountAddress = address;
    this.store.localStorage.account.autoSave(address);
  }

  public async checkAccounts() {
    const extensions = await web3Enable('my cool dapp');
    runInAction(() => {
      this.isInjectedExtensions = !!extensions.length;
    });

    if (!this.isInjectedExtensions) {
      return;
    }

    const accounts = await web3Accounts();
    runInAction(() => {
      this.accounts = accounts;
    });
  }
}

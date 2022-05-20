import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { GearKeyring, Hex } from '@gear-js/api';

export class AccountStore extends BaseStore {
  public accounts: InjectedAccountWithMeta[] = [];

  public currentAccount: InjectedAccountWithMeta | null = null;

  public isInjectedExtensions = false;

  constructor(rootStore: Store) {
    super(rootStore);

    this.checkAccounts = this.checkAccounts.bind(this);
    this.findLoggedAccount = this.findLoggedAccount.bind(this);

    makeObservable(this, {
      accounts: observable,
      currentAccount: observable,
      isInjectedExtensions: observable,
      updateAccount: action.bound,
      accountId: computed,
    });
  }

  get accountId(): Hex | null {
    return !!this.currentAccount ? GearKeyring.decodeAddress(this.currentAccount.address) : null;
  }

  public updateAccount(account: InjectedAccountWithMeta) {
    this.currentAccount = account;
    this.store.localStorage.account.autoSave(account.address);
  }

  public async checkAccounts() {
    try {
      const extensions = await web3Enable('my cool dapp');
      runInAction(() => {
        this.isInjectedExtensions = !!extensions.length;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }

    if (!this.isInjectedExtensions) {
      return;
    }

    const accounts = await web3Accounts();
    runInAction(() => {
      this.accounts = accounts;
    });

    this.findLoggedAccount();
  }

  public findLoggedAccount() {
    const loggedAddress = this.store.localStorage.account.getData();

    if (!loggedAddress || !!this.currentAccount) {
      return;
    }

    const loggedAccount = this.accounts.find(({ address }) => address === loggedAddress);

    if (!!loggedAccount) {
      this.updateAccount(loggedAccount);
    }
  }
}

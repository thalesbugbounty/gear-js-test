import { makeAutoObservable } from 'mobx';
import { StorageItems } from '../constants';
import { StorageItem } from './StorageItem';

export class LocalStorageStore {
  public account: StorageItem<string>;

  constructor() {
    this.account = new StorageItem<string>(StorageItems.account, null);

    makeAutoObservable(this);
  }
}

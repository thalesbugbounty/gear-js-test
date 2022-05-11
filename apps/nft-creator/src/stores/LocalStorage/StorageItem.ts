import { action, autorun, makeObservable, observable } from 'mobx';
import { StorageItemName } from './types';

export class StorageItem<T> {
  constructor(public name: StorageItemName, public data: T | null) {
    makeObservable(this, {
      name: observable,
      data: observable,
      autoSave: action.bound,
    });

    autorun(() => {
      if (this.data !== null) {
        localStorage.setItem(this.name, JSON.stringify(this.data));
      }
    });
  }

  autoSave(data: T) {
    this.data = data;
  }

  getData(): T | null {
    const data = localStorage.getItem(this.name);
    return data !== null ? JSON.parse(data) : null;
  }
}

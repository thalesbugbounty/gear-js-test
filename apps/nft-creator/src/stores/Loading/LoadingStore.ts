import { action, makeObservable, observable } from 'mobx';

export class LoadingStore {
  public isLoading = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      setIsLoading: action.bound,
    });
  }

  public setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

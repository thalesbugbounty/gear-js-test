import { action, computed, makeObservable, observable } from 'mobx';
import { Token } from '../../stores/interfaces';
import { generateRandomUuid, nilUuid } from '../../utils/idGenerator';

export class NftToken implements Token {
  value: string;

  constructor() {
    this.value = nilUuid();

    makeObservable(this, {
      value: observable,
      superToken: computed,
      setToken: action.bound,
      refreshToken: action.bound,
    });
  }

  get superToken(): string {
    return `${this.value}_000xxxxx000`;
  }

  setToken(value: string): void {
    this.value = value;
  }

  refreshToken(): void {
    this.value = generateRandomUuid();
  }
}

import { action, computed, makeObservable } from 'mobx';
import { Token } from '../../stores/interfaces';

export class NftToken implements Token {
  private _value: string;

  constructor() {
    this._value = '';

    makeObservable(this, {
      value: computed,
      refresh: action.bound,
    });
  }

  get value(): string {
    return this._value;
  }

  refresh(value: string): void {
    this._value = value;
  }
}

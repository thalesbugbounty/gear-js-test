import { computed, makeObservable } from 'mobx';
import { Attribute } from '../../stores/interfaces';

export class NftAttribute implements Attribute {
  private _name: string;

  private _value: string | number;

  constructor() {
    this._name = '';
    this._value = '';

    makeObservable(this, {
      name: computed,
      value: computed,
    });
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get value(): string | number {
    return this._value;
  }

  set value(value: string | number) {
    this._value = value;
  }
}

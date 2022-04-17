import { makeObservable, observable } from 'mobx';
import { Attribute } from '../../stores/interfaces';

export class NftAttribute implements Attribute {
  constructor(public name: string, public value: string | number) {
    makeObservable(this, {
      name: observable,
      value: observable,
    });
  }
}

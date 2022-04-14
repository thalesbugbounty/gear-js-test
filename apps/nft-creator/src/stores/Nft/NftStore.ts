import { action, makeObservable, observable } from 'mobx';
import { Rarity } from '../constants';
import { Attribute } from '../interfaces';

export class NftStore {
  name: string;

  description: string;

  rarity: Rarity;

  attributes: Attribute[];

  owner: string;

  constructor() {
    this.name = '';
    this.description = '';
    this.rarity = Rarity.Common;
    this.attributes = [];
    this.owner = '';

    makeObservable(this, {
      name: observable,
      description: observable,
      rarity: observable,
      attributes: observable,
      owner: observable,
      setDescription: action.bound,
    });
  }

  setDescription(description: string): void {
    this.description = description;
  }
}

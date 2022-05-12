import { action, makeObservable, observable } from 'mobx';
import { Store } from '..';
import { NftAttribute } from '../../core/Nft/NftAttribute';
import { NftToken } from '../../core/Nft/NftToken';
import { BaseStore } from '../BaseStore';
import { Rarity } from '../constants';
import { Attribute, Token } from '../interfaces';

export class NftStore extends BaseStore {
  name: string;

  description: string;

  rarity: keyof typeof Rarity;

  attributes: Attribute[];

  owner: string;

  token: Token;

  constructor(rootStore: Store) {
    super(rootStore);

    this.name = '';
    this.description = '';
    this.rarity = Rarity.Common;
    this.attributes = [new NftAttribute('color', 'red'), new NftAttribute('price', 3939939)];
    this.owner = '';
    this.token = new NftToken();

    makeObservable(this, {
      name: observable,
      description: observable,
      rarity: observable,
      attributes: observable,
      owner: observable,
      token: observable,
      setDescription: action.bound,
      setAttributes: action.bound,
      changeFirstItemName: action.bound,
    });
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setAttributes(attributes: Attribute[]): void {
    this.attributes = attributes;
  }

  changeFirstItemName(name: string): void {
    this.attributes[0].name = name;
  }
}

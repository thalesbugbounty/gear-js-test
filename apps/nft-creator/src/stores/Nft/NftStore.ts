import { action, makeObservable, observable } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import { Token } from '../types';

export class NftStore extends BaseStore {
  tokens: Token[] = [];

  constructor(rootStore: Store) {
    super(rootStore);

    makeObservable(this, {
      tokens: observable,
      setTokens: action.bound,
    });
  }

  public setTokens(tokens: Token[]) {
    this.tokens = tokens;
  }

  public async loadProgramState() {
    const state = await this.store.api.readStateOfProgram();
    if (!!state) this.setTokens(state.AllTokens.tokens);
  }
}

import { Hex } from '@gear-js/api';
import { AnyJson, ISubmittableResult } from '@polkadot/types/types';
import { action, makeObservable, observable } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import { LoadingStore } from '../Loading/LoadingStore';
import { Token } from '../types';

export class NftStore extends BaseStore {
  tokens: Token[] = [];

  tokensLoader: LoadingStore;

  mintLoader: LoadingStore;

  approveLoader: LoadingStore;

  constructor(rootStore: Store) {
    super(rootStore);

    this.tokensLoader = new LoadingStore();
    this.mintLoader = new LoadingStore();
    this.approveLoader = new LoadingStore();

    this.readAllTokens = this.readAllTokens.bind(this);
    this.readMyTokens = this.readMyTokens.bind(this);
    this.readApprovedTokens = this.readApprovedTokens.bind(this);
    this.mint = this.mint.bind(this);
    this.handleMintStatus = this.handleMintStatus.bind(this);
    this.approve = this.approve.bind(this);
    this.handleApproveStatus = this.handleApproveStatus.bind(this);

    makeObservable(this, {
      tokens: observable,
      tokensLoader: observable,
      mintLoader: observable,
      approveLoader: observable,
      setTokens: action.bound,
      reset: action.bound,
    });
  }

  public setTokens(tokens: Token[]) {
    this.tokens = tokens;
  }

  public async readAllTokens() {
    this.tokensLoader.setIsLoading(true);
    const state = await this.store.api.readState();
    if (!!state) this.setTokens(state.AllTokens.tokens);
    this.tokensLoader.setIsLoading(false);
  }

  public async readMyTokens() {
    this.tokensLoader.setIsLoading(true);
    const state = await this.store.api.readState({ TokensForOwner: { owner: this.store.account.accountId as Hex } });
    if (!!state) this.setTokens(state.TokensForOwner.tokens);
    this.tokensLoader.setIsLoading(false);
  }

  public async readApprovedTokens() {
    this.tokensLoader.setIsLoading(true);
    const state = await this.store.api.readState({ SupplyForOwner: { owner: this.store.account.accountId as Hex } });
    //TODO: add approved tokens from state
    this.setTokens([]);
    this.tokensLoader.setIsLoading(false);
  }

  public async mint(payload: AnyJson) {
    this.mintLoader.setIsLoading(true);
    await this.store.api.sendMessage(payload, this.handleMintStatus);
  }

  protected handleMintStatus({ isFinalized }: ISubmittableResult): void {
    if (isFinalized) this.mintLoader.setIsLoading(false);
  }

  public async approve(payload: AnyJson) {
    this.approveLoader.setIsLoading(true);
    await this.store.api.sendMessage(payload, this.handleApproveStatus);
  }

  protected handleApproveStatus({ isFinalized }: ISubmittableResult): void {
    if (isFinalized) this.approveLoader.setIsLoading(false);
  }

  public reset() {
    this.tokens = [];
    this.tokensLoader.setIsLoading(false);
  }
}

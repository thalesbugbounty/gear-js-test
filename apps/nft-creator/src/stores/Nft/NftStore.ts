import { Hex } from '@gear-js/api';
import { AnyJson, ISubmittableResult } from '@polkadot/types/types';
import { action, computed, makeObservable, observable } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import { LoadingStore } from '../Loading/LoadingStore';
import { ApprovePayload, MintPayload, Token, TransferPayload } from '../types';

export class NftStore extends BaseStore {
  tokens: Token[] = [];

  token: Token | null = null;

  readLoader: LoadingStore;

  messageLoader: LoadingStore;

  constructor(rootStore: Store) {
    super(rootStore);

    this.readLoader = new LoadingStore();
    this.messageLoader = new LoadingStore();

    this.readToken = this.readToken.bind(this);
    this.readAllTokens = this.readAllTokens.bind(this);
    this.readMyTokens = this.readMyTokens.bind(this);
    this.readApprovedTokens = this.readApprovedTokens.bind(this);
    this.mint = this.mint.bind(this);
    this.approve = this.approve.bind(this);
    this.transfer = this.transfer.bind(this);
    this.handleMessageStatus = this.handleMessageStatus.bind(this);

    makeObservable(this, {
      tokens: observable,
      token: observable,
      readLoader: observable,
      messageLoader: observable,
      setTokens: action.bound,
      setToken: action.bound,
      reset: action.bound,
      isAvailableForTransfer: computed,
      isAvailableForApprove: computed,
    });
  }

  get isAvailableForTransfer(): boolean {
    const accountId = this.store.account.accountId;
    return (
      !!this.token &&
      !!accountId &&
      (this.token.ownerId === accountId || !!this.token.approvedAccountIds.find(approvedId => approvedId === accountId))
    );
  }

  get isAvailableForApprove(): boolean {
    const accountId = this.store.account.accountId;
    return !!this.token && !!accountId && this.token.ownerId === accountId;
  }

  public setTokens(tokens: Token[]) {
    this.tokens = tokens;
  }

  public setToken(token: Token) {
    this.token = token;
  }

  public async readAllTokens() {
    this.readLoader.setIsLoading(true);
    const state = await this.store.api.readState();
    if (!!state) this.setTokens(state.AllTokens.tokens);
    this.readLoader.setIsLoading(false);
  }

  public async readToken(tokenId: string) {
    this.readLoader.setIsLoading(true);
    const state = await this.store.api.readState({ Token: { tokenId } });
    if (!!state) this.setToken(state.Token.token);
    this.readLoader.setIsLoading(false);
  }

  public async readMyTokens() {
    this.readLoader.setIsLoading(true);
    const state = await this.store.api.readState({ TokensForOwner: { owner: this.store.account.accountId as Hex } });
    if (!!state) this.setTokens(state.TokensForOwner.tokens);
    this.readLoader.setIsLoading(false);
  }

  public async readApprovedTokens() {
    this.readLoader.setIsLoading(true);
    //TODO: add approved tokens from state
    const state = await this.store.api.readState({ SupplyForOwner: { owner: this.store.account.accountId as Hex } });
    this.setTokens([]);
    this.readLoader.setIsLoading(false);
  }

  public async mint(payload: MintPayload) {
    this.messageLoader.setIsLoading(true);
    await this.store.api.sendMessage(payload as unknown as AnyJson, this.handleMessageStatus);
  }

  public async approve(payload: ApprovePayload) {
    this.messageLoader.setIsLoading(true);
    await this.store.api.sendMessage(payload as unknown as AnyJson, this.handleMessageStatus);
  }

  public async transfer(payload: TransferPayload) {
    this.messageLoader.setIsLoading(true);
    await this.store.api.sendMessage(payload as unknown as AnyJson, this.handleMessageStatus);
  }

  public handleMessageStatus(result: ISubmittableResult): void {
    const { isFinalized } = result;
    this.messageLoader.setIsLoading(!isFinalized);
  }

  public reset() {
    this.tokens = [];
    this.token = null;
    this.readLoader.setIsLoading(false);
  }
}

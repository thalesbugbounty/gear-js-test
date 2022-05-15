import { GearApi, getWasmMetadata, Metadata } from '@gear-js/api';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';
import { NODE_ADDRESS, PROGRAMM_ID } from '../../utils/vars';
import { getBuffer } from './utils';
import { StateOfProgram } from '../types';
import { web3FromSource } from '@polkadot/extension-dapp';
import { ISubmittableResult, AnyJson } from '@polkadot/types/types';

export class ApiStore extends BaseStore {
  public api: GearApi | undefined;

  public meta: Metadata | undefined;

  public programmBuffer: Buffer | undefined;

  public metaBuffer: Buffer | undefined;

  constructor(rootStore: Store) {
    super(rootStore);

    this.fetchMetaWasm = this.fetchMetaWasm.bind(this);
    this.fetchOptWasm = this.fetchOptWasm.bind(this);
    this.calculateGas = this.calculateGas.bind(this);
    this.readStateOfProgram = this.readStateOfProgram.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleStatus = this.handleStatus.bind(this);

    makeObservable(this, {
      api: observable,
      meta: observable,
      programmBuffer: observable,
      metaBuffer: observable,
      isApiReady: computed,
    });
  }

  public async initApi(): Promise<void> {
    try {
      const api = await GearApi.create({ providerAddress: NODE_ADDRESS });
      runInAction(() => {
        this.api = api;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async fetchMetaWasm() {
    try {
      const metaBuffer = await getBuffer(metaWasm);
      const meta = await getWasmMetadata(metaBuffer);

      runInAction(() => {
        this.metaBuffer = metaBuffer;
        this.meta = meta;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async fetchOptWasm() {
    try {
      const programmBuffer = await getBuffer(optWasm);

      runInAction(() => {
        this.programmBuffer = programmBuffer;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async sendMessage(payload: AnyJson) {
    const account = this.store.account.currentAccount;

    if (!PROGRAMM_ID || !account || !this.api) {
      return;
    }

    const {
      address,
      meta: { source },
    } = account;

    const gasLimit = await this.calculateGas(payload);

    this.api.message.submit(
      {
        destination: PROGRAMM_ID,
        payload,
        gasLimit: gasLimit || 100000000,
        value: 0,
      },
      this.meta,
    );

    const { signer } = await web3FromSource(source);
    this.api.message.signAndSend(address, { signer }, this.handleStatus);
  }

  public async calculateGas(payload: AnyJson) {
    if (!this.store.account.accountId || !PROGRAMM_ID) {
      return;
    }

    try {
      const gas = await this.api?.program.gasSpent.handle(
        this.store.account.accountId,
        PROGRAMM_ID,
        payload,
        0,
        this.meta,
      );

      return gas;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async readStateOfProgram() {
    if (!PROGRAMM_ID || !this.metaBuffer || !this.api) {
      return;
    }

    try {
      const state = await this.api?.programState.read(PROGRAMM_ID, this.metaBuffer, { AllTokens: null });
      return state.toHuman() as unknown as StateOfProgram;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public get isApiReady(): boolean {
    return !!this.api;
  }

  private handleStatus(result: ISubmittableResult): void {
    if (result.status.isFinalized) alert('success transaction');
  }
}

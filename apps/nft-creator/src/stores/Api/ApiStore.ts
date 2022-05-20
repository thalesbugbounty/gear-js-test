import { GearApi, getWasmMetadata, Metadata, TransactionStatusCb } from '@gear-js/api';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';
import { NODE_ADDRESS, PROGRAMM_ID } from '../../utils/vars';
import { getBuffer } from './utils';
import { StateOfProgramResponse, StateOfProgramRequest } from '../types';
import { web3FromSource } from '@polkadot/extension-dapp';
import { AnyJson } from '@polkadot/types/types';
import { LoadingStore } from '../Loading/LoadingStore';

export class ApiStore extends BaseStore {
  public api: GearApi | undefined;

  public meta: Metadata | undefined;

  public programmBuffer: Buffer | undefined;

  public metaBuffer: Buffer | undefined;

  public apiLoader: LoadingStore;

  constructor(rootStore: Store) {
    super(rootStore);

    this.fetchMetaWasm = this.fetchMetaWasm.bind(this);
    this.fetchOptWasm = this.fetchOptWasm.bind(this);
    this.calculateGas = this.calculateGas.bind(this);
    this.readState = this.readState.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.apiLoader = new LoadingStore();

    makeObservable(this, {
      api: observable,
      meta: observable,
      programmBuffer: observable,
      metaBuffer: observable,
      apiLoader: observable,
      isApiReady: computed,
    });
  }

  public async initApi(): Promise<void> {
    this.apiLoader.setIsLoading(true);
    try {
      const api = await GearApi.create({ providerAddress: NODE_ADDRESS });
      runInAction(() => {
        this.api = api;
      });
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      this.apiLoader.setIsLoading(false);
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

  public async sendMessage(payload: AnyJson, cb: TransactionStatusCb) {
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
    this.api.message.signAndSend(address, { signer }, cb);
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

  public async readState(request: StateOfProgramRequest = { AllTokens: null }) {
    if (!PROGRAMM_ID || !this.metaBuffer || !this.api) {
      return;
    }

    try {
      const state = await this.api.programState.read(PROGRAMM_ID, this.metaBuffer, request);
      return state.toHuman() as unknown as StateOfProgramResponse;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public get isApiReady(): boolean {
    return !!this.api;
  }
}

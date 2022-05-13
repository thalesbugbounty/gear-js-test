import { GearApi, getWasmMetadata, Metadata } from '@gear-js/api';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';
import { NODE_ADDRESS, PROGRAMM_ID } from '../../utils/vars';
import { getBuffer } from './utils';
import { StateOfProgram } from '../types';

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

  // public async sendMessage() {

  // }

  public async calculateGas() {
    if (!this.store.account.accountId || !PROGRAMM_ID) {
      return;
    }

    try {
      const gas = await this.api?.program.gasSpent.handle(
        this.store.account.accountId,
        PROGRAMM_ID,
        {
          Mint: {
            tokenMetadata: {
              name: 'Text',
              description: 'Text',
              media: 'Text',
              reference: 'Text',
            },
          },
        },
        0,
        this.meta,
      );
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
}

import { GearApi, getWasmMetadata, Metadata } from '@gear-js/api';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';
import { NODE_ADDRESS, PROGRAMM_ID } from '../../utils/vars';

export class ApiStore extends BaseStore {
  public api: GearApi | undefined;

  public meta: Metadata | undefined;

  public code: Buffer | undefined;

  constructor(rootStore: Store) {
    super(rootStore);

    this.fetchMetaWasm = this.fetchMetaWasm.bind(this);
    this.fetchOptWasm = this.fetchOptWasm.bind(this);
    this.calculateGas = this.calculateGas.bind(this);

    makeObservable(this, {
      api: observable,
      meta: observable,
      code: observable,
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
      const wasm = await fetch(metaWasm);
      const buffer = await wasm.arrayBuffer();
      const meta = await getWasmMetadata(Buffer.from(buffer));

      runInAction(() => {
        this.meta = meta;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async fetchOptWasm() {
    try {
      const wasm = await fetch(optWasm);
      const buffer = await wasm.arrayBuffer();
      const code = Buffer.from(buffer);

      runInAction(() => {
        this.code = code;
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

  public get isApiReady(): boolean {
    return !!this.api;
  }
}

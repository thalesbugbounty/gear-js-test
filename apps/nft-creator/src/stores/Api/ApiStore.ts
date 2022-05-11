import { GearApi, getWasmMetadata, Hex, Metadata, GearKeyring } from '@gear-js/api';
import { action, computed, makeObservable, observable, runInAction, toJS } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';

export class ApiStore extends BaseStore {
  public api: GearApi | undefined;

  public meta: Metadata | undefined;

  public code: Hex | Buffer | undefined;

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

    this.initApi();
    this.fetchMetaWasm();
    this.fetchOptWasm();
    this.calculateGas();
  }

  public async initApi(): Promise<void> {
    try {
      const api = await GearApi.create({ providerAddress: process.env.REACT_APP_NODE_ADDRESS });
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
    if (!this.store.account.accountId) {
      return;
    }

    try {
      const gas = await this.api?.program.gasSpent.handle(
        GearKeyring.decodeAddress(this.store.account.accountId),
        '0xa3dc271139e4a3b76fca9d1bc30ebea6a9bb53bcfe559f432f17a489dabd9f0f',
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

      console.log(gas?.toHuman(), 'GAS');
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public get isApiReady(): boolean {
    return !!this.api;
  }
}

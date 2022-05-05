import { GearApi, getWasmMetadata, Metadata } from '@gear-js/api';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';

export class ApiStore extends BaseStore {
  public api: GearApi | undefined;

  public meta: Metadata | undefined;

  constructor(rootStore: Store) {
    super(rootStore);

    makeObservable(this, {
      api: observable,
      meta: observable,
      isApiReady: computed,
      initApi: action.bound,
      fetchWasm: action.bound,
    });

    this.initApi();
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

  public async fetchWasm() {
    try {
      const wasm = await (await fetch('assets/nft.meta.wasm')).arrayBuffer();
      const meta = await getWasmMetadata(Buffer.from(wasm));

      runInAction(() => {
        this.meta = meta;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public get isApiReady(): boolean {
    return !!this.api;
  }
}

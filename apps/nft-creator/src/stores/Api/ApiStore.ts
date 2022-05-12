import { GearApi, getWasmMetadata, Metadata, decodeHexTypes, createPayloadTypeStructure } from '@gear-js/api';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { Store } from '..';
import { BaseStore } from '../BaseStore';
import metaWasm from '../../assets/nft.meta.wasm';
import optWasm from '../../assets/nft.opt.wasm';
import { NODE_ADDRESS, PROGRAMM_ID } from '../../utils/vars';
import { getBuffer } from './utils';

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
    this.readStateOfProgramm = this.readStateOfProgramm.bind(this);

    makeObservable(this, {
      api: observable,
      meta: observable,
      programmBuffer: observable,
      metaBuffer: observable,
      isApiReady: computed,
      stateInput: computed,
      types: computed,
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

  public async readStateOfProgramm() {
    if (!this.store.account.accountId || !PROGRAMM_ID || !this.metaBuffer) {
      return;
    }

    if (!!this.stateInput && !!this.types) {
      const decodedTypes = decodeHexTypes(this.types);
      const typeStruct = createPayloadTypeStructure(this.stateInput, decodedTypes, true);
      // console.log('read', decodedTypes, typeStruct);
      const state = await this.api?.programState.read(
        PROGRAMM_ID,
        this.metaBuffer,
        JSON.stringify(
          {
            NFTInfo: 'Null',
          },
          null,
          4,
        ),
      );
      console.log(state, 'STATE');
    }
  }

  public get stateInput() {
    return this.meta?.meta_state_input;
  }

  public get types() {
    return this.meta?.types;
  }

  public get isApiReady(): boolean {
    return !!this.api;
  }
}

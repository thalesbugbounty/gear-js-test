import { getWasmMetadata } from '@gear-js/api';
import contract from '../assets/nft.meta.wasm';

export const fetchWasm = async () => {
  try {
    const data = await (await getWasmMetadata(contract)).async_handle_input;
    console.log(data, 'data');
  } catch (error) {
    console.log(error);
  }
};

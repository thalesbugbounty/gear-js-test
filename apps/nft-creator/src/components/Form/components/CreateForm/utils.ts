import { AnyJson } from '@polkadot/types/types';
import { Values } from './CreateForm';

export const mapFormToPayload = (values: Values): AnyJson => {
  return {
    Mint: {
      tokenMetadata: {
        ...values,
      },
    },
  };
};

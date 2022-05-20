import { MintPayload } from '../../../../stores/types';
import { Values } from './CreateForm';

export const mapFormToPayload = (values: Values): MintPayload => {
  return {
    Mint: {
      tokenMetadata: {
        ...values,
      },
    },
  };
};

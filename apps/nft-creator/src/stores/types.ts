import { Hex } from '@gear-js/api';
import { States } from './constants';

export interface Attribute {
  name: string;
  value: string | number;
}

export interface Token {
  approvedAccountIds: Hex[];
  description: string;
  id: string;
  media: string;
  name: string;
  ownerId: Hex;
  reference: string;
}

export interface Tokens {
  tokens: Token[];
}

export type StateOfProgramResponse = Record<keyof typeof States, Tokens>;
export type StateOfProgramRequest = Partial<Record<keyof typeof States, null | { owner: Hex }>>;

export interface MessagePayload {
  Mint: {
    tokenMetadata: {
      name: string;
      description: string;
      media: string;
      reference: string;
    };
  };
}

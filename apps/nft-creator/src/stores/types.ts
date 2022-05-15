import { Hex } from '@gear-js/api';

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

export interface StateOfProgram {
  AllTokens: {
    tokens: Token[];
  };
}

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

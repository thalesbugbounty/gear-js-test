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

export interface TokensResponse {
  tokens: Token[];
}

export interface TokenResponse {
  token: Token;
}

export type StateName = keyof typeof States;

export type StateOfProgramResponse = Record<StateName, TokensResponse & TokenResponse>;
export type StateOfProgramRequest = Partial<Record<StateName, null | { owner: Hex } | { tokenId: string }>>;

export interface MintPayload {
  Mint: {
    tokenMetadata: {
      name: string;
      description: string;
      media: string;
      reference: string;
    };
  };
}

export interface ApprovePayload {
  Approve: {
    to: Hex;
    tokenId: string;
  };
}

export interface TransferPayload {
  Transfer: {
    to: Hex;
    tokenId: string;
  };
}

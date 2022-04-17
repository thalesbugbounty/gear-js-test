import { v4 as uuidv4, NIL as nil } from 'uuid';

export const generateRandomUuid = (): string => {
  return uuidv4();
};

export const nilUuid = (): string => {
  return nil;
};

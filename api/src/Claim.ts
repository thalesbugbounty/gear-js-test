import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';

import { GearTransaction } from './Transaction';
import { ClaimValueError } from './errors';
import { Hex } from './types';

/**
 * Claim value from mailbox
 */
export class GearClaimValue extends GearTransaction {
  /**
   * Submit `claimValueFromMailbox` extrinsic
   * @param messageId MessageId with value to be claimed
   */
  submit(messageId: Hex): SubmittableExtrinsic<'promise', ISubmittableResult> {
    try {
      this.submitted = this.api.tx.gear.claimValueFromMailbox(messageId);
      return this.submitted;
    } catch (error) {
      throw new ClaimValueError();
    }
  }
}

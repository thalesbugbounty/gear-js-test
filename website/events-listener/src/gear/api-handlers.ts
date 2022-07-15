import { filterEvents } from '@polkadot/api/util';
import { API_METHODS, UpdateMessageParams } from '@gear-js/common';
import { MessageEnqueuedData } from '@gear-js/api';

import { ApiResult, GenericApiData, UpdateMessageDataExtrinsic } from './types';

function updateMessageDataHandler(data: UpdateMessageDataExtrinsic): ApiResult {
  const result: UpdateMessageParams[] = [];
  const { signedBlock, events, status, genesis } = data;

  const eventMethods = ['sendMessage', 'submitProgram', 'sendReply'];
  const extrinsics = signedBlock.block.extrinsics.filter(({ method: { method } }: { method: { method: string } }) =>
    eventMethods.includes(method),
  );

  for (const {
    hash,
    args,
    method: { method },
  } of extrinsics) {
    const filteredEvents = filterEvents(hash, signedBlock, events, status).events!.filter(
      ({ event: { method } }) => method === 'MessageEnqueued',
    );
    const eventData = filteredEvents[0].event.data as MessageEnqueuedData;

    const messageId = eventData.id.toHex();
    const [payload, value] = getUpdateMessageData(args, method); // return [payload, value]

    result.push({ messageId, payload, genesis, value });
  }

  return { method: API_METHODS.MESSAGE_UPDATE_DATA, params: result };
}

function getUpdateMessageData(args: any, method: string): [any, any] {
  const indexPayload = ['sendMessage', 'sendReply'].includes(method) ? 1 : 2;
  const indexValue = indexPayload + 2;

  const payload = args[indexPayload].toHuman();
  const value = args[indexValue].toHuman();

  return [payload, value];
}

function handleApiEvent(method: API_METHODS | string | 'MessageEnqueued', data: GenericApiData): ApiResult | null {
  switch (method) {
    case API_METHODS.MESSAGE_UPDATE_DATA || 'MessageEnqueued':
      return updateMessageDataHandler(data);
    default:
      return null;
  }
}

export { handleApiEvent };

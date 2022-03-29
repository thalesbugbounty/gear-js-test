import React, { FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { u64 } from '@polkadot/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { web3FromSource } from '@polkadot/extension-dapp';
import { GearKeyring, Hex } from '@gear-js/api';
import { Input } from '@gear-js/ui';
import { PROGRAM_ERRORS } from 'consts';
import { getPreformattedText } from 'helpers';
import { useAccount, useApi, useLoading } from 'hooks';
import { Payload, Buttons } from './children';
import { useForm } from './useForm';
import styles from './Form.module.scss';
import { useMeta, useTypeStruct } from './hooks';

type Params = { destination: Hex };

const initValues = { payload: '', gasLimit: '20000000', value: '0' };

const Form = () => {
  const { destination } = useParams() as Params;
  const { api } = useApi();
  const { account } = useAccount();
  const { enableLoading, disableLoading } = useLoading();
  const alert = useAlert();
  const { values, changeValue, handleChange, resetValues } = useForm({ destination, ...initValues });

  const meta = useMeta(destination);
  const typeStruct = useTypeStruct(meta);

  useEffect(() => {
    if (typeStruct) {
      changeValue('payload', getPreformattedText(typeStruct));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeStruct]);

  const handleError = (error: Error) => {
    console.log(error);
    alert.error(error.message);
  };

  const updateGasLimit = (limit: u64) => {
    changeValue('gasLimit', limit.toString());
    alert.info(`Estimated gas: ${limit}`);
  };

  const calculateGas = () => {
    if (account) {
      const { address } = account;
      const { payload, value } = values;
      const decodedAddress = GearKeyring.decodeAddress(address);

      api.program.gasSpent
        .handle(decodedAddress, destination, payload, value, meta || 'String')
        .then(updateGasLimit)
        .catch(handleError);
    }
  };

  const handleEventsStatus = (events: EventRecord[]) => {
    events.forEach(({ event: { method } }) => {
      if (method === 'DispatchMessageEnqueued') {
        alert.success('Send message: Finalized');
        resetValues();
      } else if (method === 'ExtrinsicFailed') {
        alert.error('Extrinsic failed');
      }
    });
  };

  const handleStatus = (result: ISubmittableResult) => {
    const { status, events } = result;
    const { isInBlock, isInvalid, isFinalized } = status;

    if (isInvalid) {
      alert.error(PROGRAM_ERRORS.INVALID_TRANSACTION);
      disableLoading();
    } else if (isInBlock) {
      alert.success('Send message: In block');
    } else if (isFinalized) {
      handleEventsStatus(events);
      disableLoading();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (account) {
      const { address } = account;
      const { source } = account.meta;

      enableLoading();
      api.message.submit(values, meta);

      web3FromSource(source)
        .then(({ signer }) => ({ signer }))
        .then((options) => api.message.signAndSend(address, options, handleStatus))
        .catch(handleError);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Destination:" className={styles.input} value={destination} readOnly />
      <Payload name="payload" value={values.payload} onChange={handleChange} />
      <Input
        type="number"
        label="Gas limit:"
        className={styles.input}
        name="gasLimit"
        value={values.gasLimit}
        onChange={handleChange}
      />
      <Input
        type="number"
        label="Value:"
        className={styles.input}
        name="value"
        value={values.value}
        onChange={handleChange}
      />
      <Buttons calculateGas={calculateGas} />
    </form>
  );
};

export { Form };

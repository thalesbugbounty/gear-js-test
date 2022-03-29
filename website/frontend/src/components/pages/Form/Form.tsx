import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { u64 } from '@polkadot/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { web3FromSource } from '@polkadot/extension-dapp';
import { createPayloadTypeStructure, decodeHexTypes, GearKeyring, Hex, Metadata } from '@gear-js/api';
import { Input } from '@gear-js/ui';
import { GetMetaResponse } from 'api/responses';
import { getMeta } from 'services';
import { PROGRAM_ERRORS } from 'consts';
// import { getPreformattedText } from 'helpers';
import { useAccount, useApi, useLoading } from 'hooks';
import { Payload, Buttons } from './children';
import { useForm } from './useForm';
import styles from './Form.module.scss';

type Params = { destination: Hex };
type MetadataResponse = { result: GetMetaResponse | undefined };

const initValues = { payload: '{ "Mint": "123" }', gasLimit: '20000000', value: '0' };

const Form = () => {
  const { api } = useApi();
  const { account } = useAccount();
  const { enableLoading, disableLoading } = useLoading();
  const alert = useAlert();
  const { destination } = useParams() as Params;

  const [meta, setMeta] = useState<Metadata>();
  const { values, changeValue, handleChange, resetValues } = useForm({ destination, ...initValues });

  const getParsedMeta = ({ result }: MetadataResponse) =>
    result ? (JSON.parse(result.meta) as Metadata) : Promise.reject('No metadata');

  const getTypeStructure = ({ types, handle_input: handleInput }: Metadata) =>
    types && handleInput
      ? createPayloadTypeStructure(handleInput, decodeHexTypes(types), true)
      : Promise.reject("Can't decode types");

  const updateMeta = (parsedMeta: Metadata) => {
    setMeta(parsedMeta);
    return parsedMeta;
  };

  useEffect(() => {
    getMeta(destination)
      .then(getParsedMeta)
      .then(updateMeta)
      .then(getTypeStructure)
      // .then((typeStructure) => changeValue('payload', getPreformattedText(typeStructure)))
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateGasLimit = (limit: u64) => {
    changeValue('gasLimit', limit.toString());
    alert.info(`Estimated gas: ${limit}`);
  };

  const calculateGas = () => {
    if (account && meta) {
      const { address } = account;
      const { payload, value } = values;
      const decodedAddress = GearKeyring.decodeAddress(address);

      api.program.gasSpent.handle(decodedAddress, destination, payload, value, meta).then(updateGasLimit);
    }
  };

  const handleEventsStatus = (events: EventRecord[]) => {
    events.forEach(({ event: { method } }) => {
      if (method === 'DispatchMessageEnqueued') {
        alert.success('Send message: Finalized');
      } else if (method === 'ExtrinsicFailed') {
        alert.error('Extrinsic failed');
      }
    });
  };

  const handleStatus = (result: ISubmittableResult) => {
    const { status, events } = result;
    const { isInBlock, isInvalid, isFinalized } = status;

    enableLoading();

    if (isInvalid) {
      alert.error(PROGRAM_ERRORS.INVALID_TRANSACTION);
      disableLoading();
    } else if (isInBlock) {
      alert.success('Send message: In block');
    } else if (isFinalized) {
      handleEventsStatus(events);
      resetValues();
      disableLoading();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (account) {
      const { address } = account;
      const { source } = account.meta;

      api.message.submit(values, meta);

      web3FromSource(source)
        .then(({ signer }) => ({ signer }))
        .then((options) => api.message.signAndSend(address, options, handleStatus));
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

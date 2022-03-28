import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPayloadTypeStructure, decodeHexTypes, Metadata } from '@gear-js/api';
import { Input } from '@gear-js/ui';
import { Payload } from './children';
import styles from './Form.module.scss';
import { getMeta } from 'services';
import { getPreformattedText } from 'helpers';
import { GetMetaResponse } from 'api/responses';

type Params = { destination: string };
type MetadataResponse = { result: GetMetaResponse | undefined };

const initValues = { payload: '', gasLimit: '20000000', value: '0' };

const Form = () => {
  const { destination } = useParams() as Params;

  const [values, setValues] = useState(initValues);

  const getMetadata = ({ result }: MetadataResponse) =>
    result ? (JSON.parse(result.meta) as Metadata) : Promise.reject('No metadata');

  const getTypeStructure = ({ types, handle_input: handleInput }: Metadata) =>
    types && handleInput
      ? createPayloadTypeStructure(handleInput, decodeHexTypes(types), true)
      : Promise.reject("Can't decode");

  const updatePayload = (payloadValue: string) => {
    setValues((prevValues) => ({ ...prevValues, payload: payloadValue }));
  };

  useEffect(() => {
    getMeta(destination)
      .then(getMetadata)
      .then(getTypeStructure)
      .then(getPreformattedText)
      .then(updatePayload)
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <form>
      <Input label="Destination:" className={styles.input} value={destination} readOnly />
      <Payload name="payload" value={values.payload} onChange={handleChange} />
      <Input
        label="Gas limit:"
        className={styles.input}
        name="gasLimit"
        value={values.gasLimit}
        onChange={handleChange}
      />
      <Input label="Value:" className={styles.input} name="value" value={values.value} onChange={handleChange} />
    </form>
  );
};

export { Form };

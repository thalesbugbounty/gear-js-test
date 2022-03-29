import { useEffect, useState } from 'react';
import { createPayloadTypeStructure, decodeHexTypes, Hex, Metadata } from '@gear-js/api';
import { getMeta } from 'services';

export const useMeta = (destination: Hex) => {
  const [meta, setMeta] = useState<Metadata>();

  useEffect(() => {
    getMeta(destination)
      .then(({ result }) => result && setMeta(JSON.parse(result.meta)))
      .catch(console.error);
  }, [destination]);

  return meta;
};

export const useTypeStruct = (meta: Metadata | undefined) => {
  const [typeStruct, setTypeStruct] = useState();

  useEffect(() => {
    if (meta) {
      const { types, handle_input: handleInput } = meta;

      if (types && handleInput) {
        const decodedTypes = decodeHexTypes(types);
        const structure = createPayloadTypeStructure(handleInput, decodedTypes, true);

        setTypeStruct(structure);
      }
    }
  }, [meta]);

  return typeStruct;
};

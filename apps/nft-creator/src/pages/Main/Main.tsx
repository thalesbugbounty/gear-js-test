import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useAccountStore, useApiStore } from '../../stores';

export const Main = observer(() => {
  const { readStateOfProgramm, metaBuffer } = useApiStore();
  const { accountId } = useAccountStore();
  useEffect(() => {
    if (!!accountId && !!metaBuffer) {
      readStateOfProgramm();
    }
  }, [accountId, metaBuffer, readStateOfProgramm]);
  return <>Main</>;
});

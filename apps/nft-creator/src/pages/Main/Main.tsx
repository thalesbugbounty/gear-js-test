import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useApiStore } from '../../stores';

export const Main = observer(() => {
  const { readStateOfProgram, isApiReady } = useApiStore();
  useEffect(() => {
    if (isApiReady) {
      readStateOfProgram();
    }
  }, [isApiReady, readStateOfProgram]);
  return <>Main</>;
});

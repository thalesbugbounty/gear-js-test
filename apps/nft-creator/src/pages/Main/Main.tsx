import { useApiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { Tabs } from './components/Tabs';
import { Spinner } from '../../components/Spinner';
import { Typography } from '../../components/ui/Typography';

export const Main = observer(() => {
  const { isApiReady, apiLoader } = useApiStore();

  return (
    <S.Main>
      {!isApiReady && apiLoader.isLoading && <Spinner size="large" status="Api loading" />}
      {!apiLoader.isLoading && isApiReady && <Tabs />}
      {!apiLoader.isLoading && !isApiReady && (
        <Typography color="danger" size="l">
          Api not loaded!
        </Typography>
      )}
    </S.Main>
  );
});

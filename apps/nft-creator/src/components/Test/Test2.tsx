import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../stores/hooks/useNftStore';

export const Test2: React.FC = observer(() => {
  const nft = useNftStore();

  console.log('render test2');

  return <button onClick={() => nft.setDescription('sdfsdf')}>test2</button>;
});

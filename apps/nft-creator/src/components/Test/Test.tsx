import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../stores/hooks/useNftStore';
import { Test2 } from './Test2';

export const Test: React.FC = observer(({}) => {
  const nft = useNftStore();

  console.log('render test');

  return (
    <div>
      {nft.description}
      <Test2 />
    </div>
  );
});

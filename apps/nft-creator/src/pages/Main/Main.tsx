import { Button } from '@gear-js/ui';
import { observer } from 'mobx-react-lite';
import { BoxBordered } from '../../components/ui/Box';
import { Typography } from '../../components/ui/Typography';
import { useAccountStore } from '../../stores';

export const Main = observer(() => {
  const { accounts, updateAddress } = useAccountStore();

  return (
    <BoxBordered borderColor="success" borderRadius="none">
      Main
      {accounts.map(acc => (
        <div key={acc.address}>
          <Typography color="success">addr: {acc.address}</Typography>
          <Typography color="danger">name: {acc.meta.name}</Typography>
          <Typography color="primary">src: {acc.meta.source}</Typography>
          <Typography color="primary">hash: {acc.meta.genesisHash}</Typography>
          <Typography color="danger">type: {acc.type}</Typography>
          <Button
            text="Select"
            onClick={() => {
              updateAddress(acc.address);
            }}
          />
        </div>
      ))}
    </BoxBordered>
  );
});

import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Token } from '../../../../components/Token';
import { Box } from '../../../../components/ui/Box';
import { useNftStore } from '../../../../stores';

export const MyNfts = observer(() => {
  const { tokens } = useNftStore();

  return (
    <Box cols={12}>
      {tokens.map(({ id, name, media }) => (
        <Box cols={4} key={id}>
          <Link to={`../${id}`}>
            <Token id={id} image={media} name={name} />
          </Link>
        </Box>
      ))}
    </Box>
  );
});

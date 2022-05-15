import { Link } from 'react-router-dom';
import { NftPages } from '../../pages/constants';
import { Box } from '../ui/Box';

type Props = {
  prefix?: string;
};

export const NftNav: React.FC<Props> = ({ prefix }) => {
  return (
    <Box>
      {Object.keys(NftPages).map(page => (
        <Link key={page} to={`${prefix || ''}/${page}`}>
          {page}
        </Link>
      ))}
    </Box>
  );
};

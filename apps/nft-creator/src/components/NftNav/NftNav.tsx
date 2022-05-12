import { Link } from 'react-router-dom';
import { NftPages } from '../../pages/constants';
import { Box } from '../ui/Box';

export const NftNav = () => {
  return (
    <Box>
      {Object.keys(NftPages).map(page => (
        <Link key={page} to={`${page}`}>
          {page}
        </Link>
      ))}
    </Box>
  );
};

import { Outlet } from 'react-router-dom';
import { INDENT } from '../../styles';
import { Header } from '../Header';
import { Box } from '../ui/Box';

interface Props {
  isControl?: boolean;
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({ isControl }) => {
  return (
    <Box
      colspan={12}
      // rowGap={INDENT.xxxs}
      columnGap={INDENT.xs}
      control={isControl}
      width={['100px', '1200px']}
      margin="auto"
    >
      <Header />
      <Box tag="main">
        <Outlet />
      </Box>
    </Box>
  );
};

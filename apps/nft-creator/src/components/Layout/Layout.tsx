import { Outlet } from 'react-router-dom';
import { INDENT, LAYOUT_WIDTH } from '../../styles';
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
      width={LAYOUT_WIDTH}
      margin="auto"
    >
      <Header />
      <Box tag="main">
        <Outlet />
      </Box>
    </Box>
  );
};

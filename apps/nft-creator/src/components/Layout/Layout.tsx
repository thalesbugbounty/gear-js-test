import { INDENT } from '../../styles';
import { Header } from '../Header';
import { Box } from '../ui/Box';

interface Props {
  isControl?: boolean;
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children, isControl }) => {
  return (
    <Box
      colspan={12}
      rowGap={INDENT.xxxs}
      columnGap={INDENT.xs}
      control={isControl}
      width={['100px', '1000px']}
      margin="auto"
    >
      <Header />
      <Box tag="main">{children}</Box>
    </Box>
  );
};

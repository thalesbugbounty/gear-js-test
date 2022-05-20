import styled from 'styled-components/macro';
import { INDENT } from '../../styles';
import { Typography } from '../ui/Typography';

type Props = {
  title: string;
};

const H1 = styled(Typography)`
  padding: ${INDENT.s} ${INDENT.none};
`;

export const Title: React.FC<React.PropsWithChildren<Props>> = ({ title, ...rest }) => (
  <H1 size="l" color="primary" tag="h1" family="syncopate" {...rest}>
    {title}
  </H1>
);

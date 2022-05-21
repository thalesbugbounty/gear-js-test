import styled from 'styled-components/macro';
import { INDENT } from '../../../../styles';

export const SendButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${INDENT.xs};
`;

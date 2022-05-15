import styled from 'styled-components/macro';
import { INDENT } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.div`
  flex: 0 0 350px;
  margin-bottom: ${INDENT.s};
`;

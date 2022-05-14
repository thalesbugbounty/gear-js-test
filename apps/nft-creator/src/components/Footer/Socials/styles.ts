import styled from 'styled-components/macro';
import { INDENT } from '../../../styles';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: ${INDENT.sm};

  &:last-child {
    margin-right: 0px;
  }
`;

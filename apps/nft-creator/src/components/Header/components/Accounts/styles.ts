import styled from 'styled-components/macro';
import { INDENT } from '../../../../styles';
import { AccountButton } from '../AccountButton';

export const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Button = styled(AccountButton)`
  margin-bottom: ${INDENT.xxs};

  &:last-child {
    margin-bottom: ${INDENT.none};
  }
`;

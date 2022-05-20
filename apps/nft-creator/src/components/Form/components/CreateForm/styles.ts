import styled from 'styled-components/macro';
import { INDENT } from '../../../../styles';

export const Form = styled.form`
  width: 50%;
  min-width: 400px;
`;

export const InputWrapper = styled.div`
  margin: ${INDENT.s} ${INDENT.none};
`;

export const ButtonLoader = styled.div`
  display: flex;
  flex-wrap: nowrap;

  button {
    margin-right: ${INDENT.l};
  }
`;

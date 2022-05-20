import styled, { keyframes } from 'styled-components/macro';
import { ReactComponent as SVG } from '../../assets/gear.svg';
import { INDENT } from '../../styles';
import { Typography } from '../ui/Typography';

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Status = styled(Typography)`
  margin-left: ${INDENT.xxs};
`;

export const Icon = styled(SVG)`
  animation: ${animation} 5s linear infinite;
`;

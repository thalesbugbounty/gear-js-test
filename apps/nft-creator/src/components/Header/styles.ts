import { Button } from '@gear-js/ui';
import styled from 'styled-components/macro';
import { INDENT } from '../../styles';
import { Box } from '../ui/Box';

export const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const CollectionButton = styled(Button)`
  margin-right: ${INDENT.m};
`;

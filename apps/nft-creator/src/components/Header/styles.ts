import styled from 'styled-components/macro';
import { INDENT, Z_INDEX } from '../../styles';
import { Box } from '../ui/Box';
import { CollectionButton as Button } from './components/CollectionButton';

export const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  z-index: ${Z_INDEX.level1};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const CollectionButton = styled(Button)`
  margin-right: ${INDENT.m};
`;

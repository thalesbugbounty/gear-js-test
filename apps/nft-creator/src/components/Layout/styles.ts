import styled from 'styled-components/macro';
import { LAYOUT_WIDTH, INDENT, Z_INDEX } from '../../styles';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${LAYOUT_WIDTH};
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: ${INDENT.xxxs};
`;

export const Main = styled.main`
  width: 100%;
  flex: 1 0 auto;
  overflow: auto;
  z-index: ${Z_INDEX.level1};
`;

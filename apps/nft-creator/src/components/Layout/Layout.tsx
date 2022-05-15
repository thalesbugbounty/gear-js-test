import styled from 'styled-components/macro';
import { INDENT, LAYOUT_WIDTH } from '../../styles';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Background } from './components/Background';
import { Main } from './components/Main';

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

export const Layout = () => (
  <Wrapper>
    <Background />
    <Header />
    <Main />
    <Footer />
  </Wrapper>
);

import styled from 'styled-components/macro';
import { INDENT } from '../../styles';
import { NftImage } from './components/NftImage';

export const NftPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'left description attributes'
    'left addresses addresses';
  grid-gap: ${INDENT.xs};
  width: 100%;
`;

export const Left = styled.div`
  grid-area: left;
`;

export const Image = styled(NftImage)`
  margin-bottom: ${INDENT.xs};
`;

export const Description = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Attributes = styled.div`
  grid-area: attributes;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Addresses = styled.div`
  grid-area: addresses;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

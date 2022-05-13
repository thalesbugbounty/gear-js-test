import BaseBox from 'react-raster';
import styled from 'styled-components/macro';
import { BoxProps } from './types';

export const Box = styled(({ tag, ...rest }: BoxProps) => (
  <BaseBox breakpoints={[0, 768, 1024, 1200, 1400]} as={tag} {...rest} />
))``;

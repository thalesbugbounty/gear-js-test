import BaseBox from 'react-raster';
import styled from 'styled-components/macro';
import { BoxProps } from './types';

export const Box = styled(({ ...rest }: BoxProps) => <BaseBox {...rest} />)``;

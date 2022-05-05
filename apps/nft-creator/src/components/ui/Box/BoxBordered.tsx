import BaseBox from 'react-raster';
import styled from 'styled-components/macro';
import { BoxBorderedProps } from './types';
import { bodrerStyle } from './utils';

const Bordered: React.FC<React.PropsWithChildren<BoxBorderedProps>> = ({
  borderRadius,
  borderColor,
  borderWidth,
  tag,
  ...rest
}: BoxBorderedProps) => <BaseBox as={tag} {...rest} />;

export const BoxBordered = styled(Bordered)`
  ${bodrerStyle}
`;

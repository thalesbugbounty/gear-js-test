import React, { memo } from 'react';
import styled from 'styled-components';
import { InputProps } from './types';
import { getCommonStyles } from './utils';

const InputComponent = styled.input<InputProps>`
  ${getCommonStyles}
`;

export const Input: React.FC<React.PropsWithChildren<InputProps>> = memo(rest => <InputComponent {...rest} />);

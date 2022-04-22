import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { InputProps } from './types';
import { getCommonStyles } from './utils';

const InputComponent = styled.input<InputProps>`
  ${getCommonStyles}
`;

export const Input: React.FC<React.PropsWithChildren<InputProps>> = memo(({ onChange, ...rest }) => {
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    e => {
      if (!!onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

  return <InputComponent onChange={handleChange} {...rest} />;
});

import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { InputProps } from './types';
import { getCommonStyles } from './utils';

const InputComponent = styled.input<InputProps>`
  ${getCommonStyles}
`;

export const Input: React.FC<React.PropsWithChildren<InputProps>> = memo(({ onChange, value: val, ...rest }) => {
  const [value, setValue] = useState<string>(val || '');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!!onChange) {
        onChange(e);
      }

      setValue(e.target.value);
    },
    [onChange],
  );

  return <InputComponent value={value} onChange={handleChange} {...rest} />;
});

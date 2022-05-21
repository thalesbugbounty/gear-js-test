import { useField } from 'react-final-form';
import { Input as InputComponent, InputProps } from '@gear-js/ui';
import { memo } from 'react';
import * as S from './styles';

type Props<T> = {
  name: keyof T;
} & InputProps;

function Input<T extends Record<string, string | number>>({ name, ...rest }: React.PropsWithChildren<Props<T>>) {
  const {
    input: { onChange, value },
  } = useField<string>(name);

  return (
    <S.InputWrapper>
      <InputComponent onChange={onChange} value={value} {...rest} />
    </S.InputWrapper>
  );
}

export const FormInput = memo(Input) as typeof Input;

import { useField } from 'react-final-form';
import { Input, InputProps } from '@gear-js/ui';
import { memo } from 'react';

type Props = {
  name: string;
} & InputProps;

export const FormInput: React.FC<Props> = memo(({ name, ...rest }) => {
  const {
    input: { onChange, value },
  } = useField<string>(name);

  return <Input onChange={onChange} value={value} {...rest} />;
});

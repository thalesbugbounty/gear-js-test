import { useField } from 'react-final-form';
import { Input, InputProps } from '@gear-js/ui';
import { memo } from 'react';

type Props = {
  name: string;
} & InputProps;

export const FormInput: React.FC<Props> = memo(({ name }) => {
  const { input } = useField<string>(name);

  return <Input {...input} />;
});

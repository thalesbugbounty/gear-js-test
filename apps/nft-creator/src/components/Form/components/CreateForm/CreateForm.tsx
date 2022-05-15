import { Form } from 'react-final-form';
import { Button } from '@gear-js/ui';
import { FormInput } from '../FormInput';
import * as S from './styles';

type Values = {
  title: string;
  subtitle: string;
};

export const CreateForm = () => {
  const onSubmit = (values: Values) => {
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ title: '123', subtitle: '321' }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <FormInput name="title" />
          </S.InputWrapper>
          <S.InputWrapper>
            <FormInput name="subtitle" />
          </S.InputWrapper>
          <Button type="submit" text="Send" />
        </form>
      )}
    />
  );
};

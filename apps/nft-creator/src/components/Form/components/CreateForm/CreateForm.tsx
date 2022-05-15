import { Form } from 'react-final-form';
import { Button } from '@gear-js/ui';
import { FormInput } from '../FormInput';
import * as S from './styles';
import { observer } from 'mobx-react-lite';
import { useApiStore } from '../../../../stores';
import { mapFormToPayload } from './utils';

export type Values = {
  name: string;
  description: string;
  media: string;
  reference: string;
};

export const CreateForm = observer(() => {
  const { sendMessage } = useApiStore();
  const onSubmit = (values: Values) => {
    const payload = mapFormToPayload(values);

    sendMessage(payload);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ title: '123', subtitle: '321' }}
      render={({ handleSubmit }) => (
        <S.Form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <FormInput name="name" placeholder="Enter the name" />
          </S.InputWrapper>
          <S.InputWrapper>
            <FormInput name="description" placeholder="Describe your NFT" />
          </S.InputWrapper>
          <S.InputWrapper>
            <FormInput name="media" placeholder="Enter attributes if any (Example: rarity: common, eyes: black)" />
          </S.InputWrapper>
          <S.InputWrapper>
            <FormInput name="reference" placeholder="Enter the file" />
          </S.InputWrapper>
          <Button type="submit" text="CREATE NFT" />
        </S.Form>
      )}
    />
  );
});

import { Form } from 'react-final-form';
import { Button } from '@gear-js/ui';
import { FormInput } from '../FormInput';
import * as S from './styles';
import { observer } from 'mobx-react-lite';
import { useAccountStore, useNftStore } from '../../../../stores';
import { mapFormToPayload } from './utils';
import { Spinner } from '../../../Spinner';

export type Values = {
  name: string;
  description: string;
  media: string;
  reference: string;
};

export const CreateForm = observer(() => {
  const {
    mint,
    messageLoader: { isLoading },
  } = useNftStore();
  const { accountId } = useAccountStore();
  const onSubmit = (values: Values) => {
    const payload = mapFormToPayload(values);

    mint(payload);
  };
  return (
    <Form<Values>
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <S.Form onSubmit={handleSubmit}>
          <FormInput<Values> name="name" placeholder="Enter the name" />
          <FormInput<Values> name="description" placeholder="Describe your NFT" />
          <FormInput<Values>
            name="media"
            placeholder="Enter attributes if any (Example: rarity: common, eyes: black)"
          />
          <FormInput<Values> name="reference" placeholder="Enter the file" />
          <S.ButtonLoader>
            <Button type="submit" text="CREATE NFT" disabled={!accountId} />
            {isLoading && <Spinner status="In progress" />}
          </S.ButtonLoader>
        </S.Form>
      )}
    />
  );
});

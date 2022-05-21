import { Form } from 'react-final-form';
import { Button } from '@gear-js/ui';
import { FormInput } from '../FormInput';
import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../../../stores';
import { Spinner } from '../../../Spinner';
import { Hex } from '@gear-js/api';
import { TransferPayload } from '../../../../stores/types';

export type Values = {
  transferId: Hex;
};

export const TransferForm = observer(() => {
  const {
    transfer,
    messageLoader: { isLoading },
    token,
  } = useNftStore();
  const onSubmit = (values: Values) => {
    const payload: TransferPayload = {
      Transfer: {
        to: values.transferId,
        tokenId: token?.id || '',
      },
    };

    transfer(payload);
  };

  return (
    <Form<Values>
      onSubmit={onSubmit}
      render={({ handleSubmit, values: { transferId } }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FormInput<Values> name="transferId" placeholder="Enter the address" />
            {isLoading && <Spinner status="In progress" />}
            {!isLoading && <Button type="submit" text="Transfer" disabled={!transferId} />}
          </form>
        );
      }}
    />
  );
});

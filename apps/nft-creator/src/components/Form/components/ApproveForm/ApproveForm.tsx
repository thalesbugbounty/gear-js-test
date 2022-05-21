import { Form } from 'react-final-form';
import { Button } from '@gear-js/ui';
import { FormInput } from '../FormInput';
import { observer } from 'mobx-react-lite';
import { useNftStore } from '../../../../stores';
import { Spinner } from '../../../Spinner';
import { Hex } from '@gear-js/api';
import { ApprovePayload } from '../../../../stores/types';

export type Values = {
  approveId: Hex;
  test: string;
};

export const ApproveForm = observer(() => {
  const {
    approve,
    messageLoader: { isLoading },
    token,
  } = useNftStore();
  const onSubmit = (values: Values) => {
    const payload: ApprovePayload = {
      Approve: {
        to: values.approveId,
        tokenId: token?.id || '',
      },
    };

    approve(payload);
  };

  // console.log(messageLoader.isLoading);
  return (
    <Form<Values>
      onSubmit={onSubmit}
      // initialValues={{ approveId: '' }}
      render={({ handleSubmit, values: { approveId } }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FormInput<Values> name="approveId" placeholder="Enter the address" />
            {isLoading && <Spinner status="In progress" />}
            {!isLoading && <Button type="submit" text="Approve" disabled={!approveId} />}
          </form>
        );
      }}
    />
  );
});

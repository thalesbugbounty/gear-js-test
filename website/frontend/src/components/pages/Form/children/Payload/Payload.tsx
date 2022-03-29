import React from 'react';
import { Checkbox, Textarea, TextareaProps } from '@gear-js/ui';
import { useInput } from '../../useForm';
import commonStyles from '../../Form.module.scss';
import styles from './Payload.module.scss';

interface Props extends TextareaProps {}

const Payload = (props: Props) => {
  const { value: isManualInput, handleChange } = useInput(false);

  return (
    <div className={commonStyles.input}>
      <span className={styles.label}>Payload:</span>
      <div>
        <Checkbox
          type="switch"
          label="Manual input"
          className={styles.checkbox}
          checked={isManualInput}
          onChange={handleChange}
        />
        <Textarea {...props} />
      </div>
    </div>
  );
};

export { Payload };

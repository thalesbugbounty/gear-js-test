import React, { useState, ChangeEvent } from 'react';
import { Checkbox, Textarea, TextareaProps } from '@gear-js/ui';
import commonStyles from '../../Form.module.scss';
import styles from './Payload.module.scss';

interface Props extends TextareaProps {}

const Payload = (props: Props) => {
  const [isManualInput, setIsManualInput] = useState(true);

  const handleManualInputChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    setIsManualInput(checked);
  };

  return (
    <div className={commonStyles.input}>
      <span className={styles.label}>Payload:</span>
      <div>
        <Checkbox
          type="switch"
          label="Manual input"
          className={styles.checkbox}
          checked={isManualInput}
          onChange={handleManualInputChange}
        />
        <Textarea {...props} />
      </div>
    </div>
  );
};

export { Payload };

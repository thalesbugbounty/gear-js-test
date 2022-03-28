import { ChangeEvent } from 'react';
import { useState } from 'react';

const useForm = <Values>(initValues: Values) => {
  const [values, setValues] = useState(initValues);

  const changeValue = (key: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    changeValue(name, value);
  };

  return { values, changeValue, handleChange };
};

export { useForm };

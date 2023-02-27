import { removeSpaceInString } from '@utils/string';
import { useState, useCallback, useEffect } from 'react';

interface Options {
  initialValue?: string;
  maxLength?: number;
  autoFix?: boolean;
  type?: 'number' | 'string';
  regExeForValidationCheck?: RegExp;
}

interface ReturnType {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  reset: () => void;
}
/**
 * input의 값을 핸들링하는 훅입니다. validation check, auto-fix 등 기능들은 추가될 예정입니다.
 * @param {initialValue} options
 * @returns {ReturnType}
 */
const useInput = (options?: Options): ReturnType => {
  const {
    initialValue = '',
    maxLength,
    autoFix = true,
    type = 'string',
    regExeForValidationCheck,
  } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!regExeForValidationCheck || value.length === 0) {
      setIsError(false);
      return;
    }
    setIsError(!regExeForValidationCheck.test(removeSpaceInString(value)));
  }, [regExeForValidationCheck, value]);

  const handleNumber = useCallback(
    (receivedValue: string) => {
      let result: string = receivedValue;

      if (maxLength) {
        result = result.substring(0, maxLength);
      }

      const returnValue: string = autoFix ? result : receivedValue;

      setValue(returnValue);
    },
    [maxLength, autoFix],
  );

  const handleString = useCallback(
    (receivedValue: string) => {
      let result: string = receivedValue;

      if (maxLength) {
        result = result.substring(0, maxLength);
      }

      const returnValue: string = autoFix ? result : receivedValue;

      setValue(returnValue);
    },
    [maxLength, autoFix],
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue: string = e.target.value || '';

      if (type === 'number') {
        handleNumber(targetValue);
        return;
      }
      handleString(targetValue);
    },
    [type, handleNumber, handleString],
  );

  const reset = () => {
    setValue('');
  };

  return { value, onChangeInput, isError, reset };
};

export default useInput;

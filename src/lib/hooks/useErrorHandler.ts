import { useState } from 'react';
import { AxiosError } from 'axios';

interface ObjectError {
  [key: string]: string;
}

export type UseErrorHandler = ReturnType<typeof useErrorHandler>;

export const useErrorHandler = () => {
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);

  // eslint-disable-next-line no-shadow
  const handleError = (error: AxiosError) => {
    if (!error || !error.response) {
      setError('No response');
      return;
    }

    setStatus(error.response.status);

    if (error.response.status >= 500) {
      setError('Server error');
      return;
    }

    if (
      error.response.data &&
      error.response.data.errors &&
      Object.keys(error.response.data.errors).length > 0
    ) {
      const errorsData = error.response.data.errors;
      const errorsObject: ObjectError = {};

      Object.keys(errorsData).forEach((key: string) => {
        if (errorsData.hasOwnProperty(key)) {
          errorsObject[key] = errorsData[key][0];
        }
      });

      setError(errorsObject);
      return;
    }

    setError(error.response.data.message || error.message);
  };

  const reset = () => {
    setError(null);
    setStatus(null);
  };

  const setStringError = (e?: string) => {
    setError(e || null);
  };

  const setObjectError = (error?: ObjectError) => {
    setError(error || null);
  };

  return {
    error,
    status,
    isString: error === null || typeof error === 'string',
    handleError,
    reset,
    setStringError: setStringError,
    setObjectError: setObjectError,
  };
};

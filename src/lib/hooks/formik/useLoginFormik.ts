import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export interface LoginFields {
  email: string;
  password: string;
}

interface UseLoginFormOptions {
  initialValues?: LoginFields;
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => Promise<any>;
}

export const useLoginFormik = (options: UseLoginFormOptions) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be more than 6 letters')
      .required('Password is required'),
  });

  return useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: async (values, formikHelpers) => {
      await options.onSubmit(values, formikHelpers);
    },
  });
};

export type LoginFormik = ReturnType<typeof useLoginFormik>;

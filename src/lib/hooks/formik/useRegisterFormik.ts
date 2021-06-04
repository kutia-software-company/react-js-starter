import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RegisterFields } from "../../../components/user/RegisterForm/RegisterForm";

interface UseRegisterFormOptions {
  initialValues?: RegisterFields;
  onSubmit: (
    values: RegisterFields,
    formikHelpers: FormikHelpers<RegisterFields>
  ) => Promise<any>;
}

export const useRegisterFormik = (options: UseRegisterFormOptions) => {
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be more than 6 letters")
      .required("Password is required"),
  });

  return useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit: async (values, formikHelpers) => {
      await options.onSubmit(values, formikHelpers);
    },
  });
};

export type RegisterFormik = ReturnType<typeof useRegisterFormik>;

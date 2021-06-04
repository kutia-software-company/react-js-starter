import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RegisterForm } from "../../components/user/RegisterForm/RegisterForm";

//styles
import "./Register.scss";

interface Props {}

export const Register = (props: RouteComponentProps<Props>) => {
  return (
    <div className="Register">
      <RegisterForm />
    </div>
  );
};

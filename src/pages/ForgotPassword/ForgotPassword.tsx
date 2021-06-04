import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

//styles
import './ForgotPassword.scss';

interface Props {}

export const ForgotPassword = (props: RouteComponentProps<Props>) => {
  return (
    <div className="ForgotPassword">
      <h1>ForgotPassword</h1>
    </div>
  );
};

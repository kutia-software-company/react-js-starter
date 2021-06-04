import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

//styles
import './ResetPassword.scss';

interface Props {}

export const ResetPassword = (props: RouteComponentProps<Props>) => {
  return (
    <div className="ResetPassword">
      <h1>ResetPassword</h1>
    </div>
  );
};

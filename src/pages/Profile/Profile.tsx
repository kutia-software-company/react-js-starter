import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

//styles
import './Profile.scss';

interface Props {}

export const Profile = (props: RouteComponentProps<Props>) => {
  return (
    <div className="Profile">
      <h1>Profile</h1>
    </div>
  );
};

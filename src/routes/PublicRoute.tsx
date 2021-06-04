import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export const PublicRoute = (props: RouteProps) => {
  return <Route {...props} />;
};

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useClient } from './useClient';

const PrivateRoute = ({ children }) => {
  const client = useClient();

  if (!client) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

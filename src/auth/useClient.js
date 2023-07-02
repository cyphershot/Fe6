import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useClient = () => {
  const [token] = useToken();

  const getPayloadFromToken = token => {
    const encodedPayload = token.split('.')[1];
    return JSON.parse(atob(encodedPayload));
  };

  const [client, setClient] = useState(() => {
    if (!token) return null;
    return getPayloadFromToken(token);
  });

  useEffect(() => {
    if (!token) {
      setClient(null);
    } else {
      setClient(getPayloadFromToken(token));
    }
  }, [token]);

  return client;
};

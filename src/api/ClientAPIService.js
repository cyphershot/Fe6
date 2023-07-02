import { makeApiRequest } from './APIService';

const clientLoginService = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = makeApiRequest('POST', '/api/client/login', { email, password });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const clientSignUpService = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = makeApiRequest('POST', '/api/client/signup', { email, password });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export { clientLoginService, clientSignUpService };

import { makeApiRequest } from './APIService';

const employeeRegisterService = req => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = makeApiRequest('POST', '/employee/register', { req });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllEmployeeService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = makeApiRequest('POST', '/get-all-employees', {});
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const getEmployeeDetailsService = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = makeApiRequest('POST', `employee/view/${id}`, {});
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export { employeeRegisterService, getAllEmployeeService, getEmployeeDetailsService };

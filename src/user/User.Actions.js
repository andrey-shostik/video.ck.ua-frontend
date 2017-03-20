import { CALL_API } from 'redux-api-middleware';

export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USER_REMOVE_SUCCESS = 'USER_REMOVE_SUCCESS';

export const getUsers = () => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/users/`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      types: ['REQUEST', USERS_GET_SUCCESS, 'FAILURE']
    }
  };
};

export const removeUser = (id) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/users/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      types: ['REQUEST', USER_REMOVE_SUCCESS, 'FAILURE']
    }
  };
};

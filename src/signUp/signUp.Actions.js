import { CALL_API } from 'redux-api-middleware';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

export const signUp = (user) => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3005/api/users/signup',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      types: ['REQUEST', SIGN_UP_SUCCESS, 'FAILURE']
    }
  };
};

import { CALL_API } from 'redux-api-middleware';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (user) => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3005/api/users/signin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      types: ['REQUEST', SIGN_IN_SUCCESS, 'FAILURE']
    }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

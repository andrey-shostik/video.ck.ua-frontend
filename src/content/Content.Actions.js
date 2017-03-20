import { CALL_API } from 'redux-api-middleware';

export const MOVIES_GET_SUCCESS = 'MOVIES_GET_SUCCESS';

export const getMovies = () => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3005/api/movies',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      types: ['REQUEST', MOVIES_GET_SUCCESS, 'FAILURE']
    }
  };
};

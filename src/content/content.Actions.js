import { CALL_API } from 'redux-api-middleware';

export const CONTENT_GET_SUCCESS = 'CONTENT_GET_SUCCESS';

export const fetchData = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/movies',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['REQUEST', CONTENT_GET_SUCCESS, 'FAILURE']
    }
  };
};

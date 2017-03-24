import { CALL_API } from 'redux-api-middleware';

// CRUD
export const MOVIE_ADD_SUCCESS = 'MOVIE_ADD_SUCCESS';
export const MOVIE_GET_SUCCESS = 'MOVIE_GET_SUCCESS';
export const MOVIE_EDIT_SUCCESS = 'MOVIE_EDIT_SUCCESS';
export const MOVIE_REMOVE_SUCCESS = 'MOVIE_REMOVE_SUCCESS';

export const getMovie = (id) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/movies/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      types: ['REQUEST', MOVIE_GET_SUCCESS, 'FAILURE']
    }
  };
};

export const addMovie = (data) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/movies/`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      body: JSON.stringify(data),
      types: ['REQUEST', MOVIE_ADD_SUCCESS, 'FAILURE']
    }
  };
};

export const removeMovie = (id) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/movies/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      types: ['REQUEST', MOVIE_REMOVE_SUCCESS, 'FAILURE']
    }
  };
};

export const editMovie = (id, data) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3005/api/movies/${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: ''
      },
      body: JSON.stringify(data),
      types: ['REQUEST', MOVIE_EDIT_SUCCESS, 'FAILURE']
    }
  };
};

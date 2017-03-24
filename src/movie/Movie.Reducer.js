import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { MOVIE_GET_SUCCESS, MOVIE_ADD_SUCCESS } from './Movie.Actions';

const initialState = {
  movie: {}
};

function getMovie(state, { payload }) {
  return state.set('movie', Immutable.fromJS(payload.movie));
}

function addMovie(state, { payload }) {
  return state.set('movie', Immutable.fromJS(payload.movie));
}

export default createReducer({
  [MOVIE_GET_SUCCESS]: getMovie,
  [MOVIE_ADD_SUCCESS]: addMovie
}, Immutable.fromJS(initialState));

import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { MOVIES_GET_SUCCESS } from './content.Actions';

const initialState = {
  movies: []
};

function getMovies(state, { payload }) {
  return state.set('movies', payload);
}

export default createReducer({
  [MOVIES_GET_SUCCESS]: getMovies
}, Immutable.fromJS(initialState));

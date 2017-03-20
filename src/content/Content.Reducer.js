import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { MOVIES_GET_SUCCESS } from './Content.Actions';

const initialState = {
  movies: []
};

function getMovies(state, { payload }) {
  return state.set('movies', Immutable.fromJS(payload));
}

export default createReducer({
  [MOVIES_GET_SUCCESS]: getMovies
}, Immutable.fromJS(initialState));

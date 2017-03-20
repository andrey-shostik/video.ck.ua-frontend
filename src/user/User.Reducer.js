import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { USERS_GET_SUCCESS } from './User.Actions';

const initialState = {
  users: [{}]
};

function getUsers(state, { payload }) {
  return state.set('users', Immutable.fromJS(payload));
}

export default createReducer({
  [USERS_GET_SUCCESS]: getUsers
}, Immutable.fromJS(initialState));

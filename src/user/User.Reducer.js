import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { USER_GET_SUCCESS, USERS_GET_SUCCESS } from './User.Actions';

const initialState = {
  user: {},
  users: [{}]
};

function getUsers(state, { payload }) {
  return state.set('users', Immutable.fromJS(payload));
}

function getUser(state, { payload }) {
  return state.set('user', Immutable.fromJS(payload.user));
}

export default createReducer({
  [USERS_GET_SUCCESS]: getUsers,
  [USER_GET_SUCCESS]: getUser
}, Immutable.fromJS(initialState));

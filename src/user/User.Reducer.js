import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { USERS_GET_SUCCESS, USER_GET_SUCCESS } from './User.Actions';

const initialState = {
  users: [{}],
  user: {}
};

function getUsers(state, { payload }) {
  return state.set('users', Immutable.fromJS(payload));
}

function getUser(state, { payload }) {
  return state.set('user', Immutable.fromJS(payload.user));
}

export default createReducer({
  [USER_GET_SUCCESS]: getUser,
  [USERS_GET_SUCCESS]: getUsers
}, Immutable.fromJS(initialState));

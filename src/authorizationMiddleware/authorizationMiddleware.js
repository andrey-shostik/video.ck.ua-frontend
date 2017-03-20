import { CALL_API } from 'redux-api-middleware';

export default store => next => action => {
  const callApi = action[CALL_API];

  if (callApi && Object.keys(callApi.headers).indexOf('authorization') !== -1) {
    callApi.headers.authorization = store.getState().signIn.get('token');
  }
  return next(action);
};

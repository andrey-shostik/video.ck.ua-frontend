import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../reducers';
import authorizationMiddleware from '../authorizationMiddleware/authorizationMiddleware';

export default function configureStore(initialState = {}) {
   // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(authorizationMiddleware, apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => {
      return f;
    }
  ];

  return createStore(reducers, initialState, compose(...enhancers));
}

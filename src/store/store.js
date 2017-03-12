import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../reducers';

export default function configureStore(initialState = {}) {
   // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => {
      return f;
    }
  ];

  const store = createStore(reducers, initialState, compose(...enhancers));

  return store;
}

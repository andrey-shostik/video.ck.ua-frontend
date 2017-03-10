import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.scss';
import routes from './routes';
import configureStore from './store/store';

const store = configureStore({});
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

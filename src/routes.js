import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';
import Content from './content/content';
import NotFound from './components/notFound/notFound';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Content}/>
      <Route path="content" component={Content}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Route>
);


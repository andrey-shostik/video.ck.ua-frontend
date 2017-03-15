import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';
import Content from './content/content';
import NotFound from './components/notFound/notFound';
import Movie from './components/movie/movie';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import Administration from './administration/administration';
import CheckAuth from './components/checkAuth/checkAuth';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Content}/>
      <Route path="content" component={Content}/>
      <Route path="movie/:id" component={Movie}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
      <Route component={CheckAuth} requiredGroups={['ADMIN', 'MODERATOR']}>
        <Route path="administration/:group" component={Administration}/>
      </Route>
    </Route>
    <Route path="*" component={NotFound}/>
  </Route>
);


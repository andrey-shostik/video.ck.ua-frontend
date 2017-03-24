import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import Content from './content/Content';
import NotFound from './components/notFound/notFound';
import Movie from './movie/Movie';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Administration from './administration/Administration';
import CheckAuth from './components/checkAuth/checkAuth';
import FormMovie from './administration/components/formMovie/formMovie';
import FormUser from './administration/components/formUser/formUser';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Content}/>
      <Route path="movies/:id" component={Movie}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
      <Route component={CheckAuth} requiredGroups={['ADMIN', 'MODERATOR']}>
        <Route path="administration/:group" component={Administration}/>
        <Route path="administration/:group">
          <Route path="movies/new" component={FormMovie}/>
          <Route path="movies/:id/edit" component={FormMovie}/>
          <Route path="users/:id/edit" component={FormUser}/>
        </Route>
      </Route>
    </Route>
    <Route path="*" component={NotFound}/>
  </Route>
);

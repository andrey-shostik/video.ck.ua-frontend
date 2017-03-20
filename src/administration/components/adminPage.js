import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import AdministrationTable from './administrationTable';
import './adminPage.scss';
import { getMovies } from '../../content/Content.Actions';
import { removeMovie } from '../../movie/Movie.Actions';
import { getUsers, removeUser } from '../../user/User.Actions';

class AdminPage extends Component {
  render() {
    const { boundGetMovies, movies, boundGetUsers, users, boundRemoveMovie, boundRemoveUser } = this.props;

    return (
      <div className="container">
        <Tabs>
          <Tab label="Movies" >
            <AdministrationTable
              boundGetData={boundGetMovies}
              boundRemoveData={boundRemoveMovie}
              dataType="movies"
              data={movies}
              group="admin"
            />
          </Tab>
          <Tab label="Users" >
            <AdministrationTable
              boundGetData={boundGetUsers}
              boundRemoveData={boundRemoveUser}
              dataType="users"
              data={users}
              group="admin"
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

AdminPage.propTypes = {
  movies: ImmutablePropTypes.list,
  users: ImmutablePropTypes.list,
  boundGetMovies: PropTypes.func,
  boundGetUsers: PropTypes.func,
  boundRemoveMovie: PropTypes.func,
  boundRemoveUser: PropTypes.func
};

export default connect((store) => {
  return {
    movies: store.content.get('movies'),
    users: store.user.get('users')
  };
}, (dispatch) => {
  return {
    boundGetMovies: bindActionCreators(getMovies, dispatch),
    boundGetUsers: bindActionCreators(getUsers, dispatch),
    boundRemoveMovie: bindActionCreators(removeMovie, dispatch),
    boundRemoveUser: bindActionCreators(removeUser, dispatch)
  };
})(AdminPage);

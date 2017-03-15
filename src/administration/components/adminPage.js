import React, { Component, PropTypes } from 'react';
import UsersTable from './usersTable';

class AdminPage extends Component {
  componentWillMount() {
    const { boundGetContent } = this.props;
    boundGetContent();
  }

  render() {
    const { movies } = this.props;
    return (
      <UsersTable movies={movies}/>
    );
  }
}

AdminPage.propTypes = {
  boundGetContent: PropTypes.func,
  movies: PropTypes.array
};

export default AdminPage;

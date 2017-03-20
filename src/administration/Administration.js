import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import ModeratorPage from './components/moderatorPage';
import AdminPage from './components/adminPage';
// import { getMovies } from '../content/Content.Actions';
// import { getMovie, addMovie, editMovie, removeMovie } from '../movie/Movie.Actions';

class Administration extends Component {
  getChildContext() {
    return { router: this.props.router };
  }
  renderAdminPage(requiredGroup, groups) {
    if (groups.indexOf('ADMIN') !== -1 && requiredGroup === 'admin') {
      const { token } = this.props;
      return (
        <AdminPage
          token={token}
        />
      );
    } else {
      return null;
    }
  }

  renderModeratorPage(requiredGroup, groups) {
    if (groups.indexOf('MODERATOR') !== -1 && requiredGroup === 'moderator') {
      return (
        <ModeratorPage/>
      );
    } else {
      return null;
    }
  }

  render() {
    const { routeParams: { group }, groups } = this.props;

    return (
      <div>
        { this.renderAdminPage(group, groups) }
        { this.renderModeratorPage(group, groups) }
      </div>
    );
  }
}

Administration.propTypes = {
  routeParams: PropTypes.object,
  groups: PropTypes.object,
  token: PropTypes.string,
  router: PropTypes.object
};

Administration.childContextTypes = {
  router: PropTypes.object
};

export default connect((store) => {
  return {
    groups: store.signIn.get('groups'),
    token: store.signIn.get('token')
  };
})(Administration);


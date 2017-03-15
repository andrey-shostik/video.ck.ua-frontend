import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModeratorPage from './components/moderatorPage';
import AdminPage from './components/adminPage';
import { getMovies } from '../content/content.Actions';

class Administration extends Component {
  renderAdminPage(requiredGroup, groups) {
    if (groups.indexOf('ADMIN') !== -1 && requiredGroup === 'admin') {
      return (
        <AdminPage
          movies={this.props.movies}
          boundGetContent={this.props.boundGetContent}
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
      return false;
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
  boundGetContent: PropTypes.func,
  movies: PropTypes.array,
  groups: PropTypes.object
};

export default connect((store) => {
  return {
    movies: store.content.get('movies'),
    groups: store.signIn.get('groups')
  };
}, (dispatch) => {
  return {
    boundGetContent: bindActionCreators(getMovies, dispatch)
  };
})(Administration);


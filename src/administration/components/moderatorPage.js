import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import AdministrationTable from './administrationTable';
import './adminPage.scss';
import { getMovies } from '../../content/Content.Actions';
import { removeMovie } from '../../movie/Movie.Actions';

class AdminPage extends Component {
  render() {
    const { boundRemoveMovie, boundGetMovies, movies } = this.props;

    return (
      <div className="container">
        <AdministrationTable
          boundGetData={boundGetMovies}
          boundRemoveData={boundRemoveMovie}
          dataType="movies"
          data={movies}
          group="moderator"
        />
      </div>
    );
  }
}

AdminPage.propTypes = {
  movies: ImmutablePropTypes.list,
  boundGetMovies: PropTypes.func,
  boundRemoveMovie: PropTypes.func
};

export default connect((store) => {
  return {
    movies: store.content.get('movies'),
    users: store.user.get('users')
  };
}, (dispatch) => {
  return {
    boundGetMovies: bindActionCreators(getMovies, dispatch),
    boundRemoveMovie: bindActionCreators(removeMovie, dispatch)
  };
})(AdminPage);

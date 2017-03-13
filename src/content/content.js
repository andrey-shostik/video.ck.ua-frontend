import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Section from '../components/listContainer/listContainer';
import { getMovies } from './content.Actions';
import './content.scss';

const UserNotAuthorized = () => {
  return (
    <div className="flex-container user-not-authorized">
      <h1> You are not authorized, please sign in </h1>
    </div>
  );
};

class Content extends Component {
  componentWillMount() {
    const { boundGetContent } = this.props;
    boundGetContent();
  }

  render() {
    const { movies } = this.props;

    if (localStorage.getItem('id_token')) {
      return (
        <Section data={movies}/>
      );
    } else {
      return (
        <UserNotAuthorized/>
      );
    }
  }
}

Content.propTypes = {
  movies: PropTypes.oneOfType([
    PropTypes.array,
    ImmutablePropTypes.list
  ]),
  boundGetContent: PropTypes.func
};

export default connect((store) => {
  return {
    movies: store.content.get('movies')
  };
}, (dispatch) => {
  return {
    boundGetContent: bindActionCreators(getMovies, dispatch)
  };
})(Content);


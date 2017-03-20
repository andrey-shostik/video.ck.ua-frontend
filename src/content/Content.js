import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Section from '../components/listContainer/listContainer';
import { getMovies } from './Content.Actions';
import './Content.scss';
import UserNotAuthorized from '../components/userNotAuthorized/userNotAuthorized';

class Content extends Component {
  componentWillMount() {
    const { boundGetContent, token } = this.props;
    if (token) {
      boundGetContent(token);
    }
  }

  render() {
    const { movies, token } = this.props;

    if (token) {
      return (
        <Section data={movies.toJS()}/>
      );
    } else {
      return (
        <UserNotAuthorized/>
      );
    }
  }
}

Content.propTypes = {
  movies: ImmutablePropTypes.list,
  boundGetContent: PropTypes.func,
  token: PropTypes.string
};

export default connect((store) => {
  return {
    movies: store.content.get('movies'),
    token: store.signIn.get('token')
  };
}, (dispatch) => {
  return {
    boundGetContent: bindActionCreators(getMovies, dispatch)
  };
})(Content);


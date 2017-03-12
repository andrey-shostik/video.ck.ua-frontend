import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Section from '../components/listContainer/listContainer';
// import data from '../static/data';
import { getMovies } from './content.Actions';

class Content extends Component {
  componentWillMount() {
    const { boundGetContent } = this.props;
    boundGetContent();
  }

  render() {
    const { movies } = this.props;

    return (
      <Section data={movies}/>
    );
  }
}

Content.propTypes = {
  movies: PropTypes.object,
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

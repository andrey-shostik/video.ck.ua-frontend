import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../../content/content.Actions';
import Item from '../item/item';

class Movie extends Component {
  componentWillMount() {
    const { boundGetContent } = this.props;
    boundGetContent(localStorage.getItem('id_token'));
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <div className="flex-container flex-section">
          <Item watch={false} movie={movie}/>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  boundGetContent: PropTypes.func
};

export default connect((store, ownProps) => {
  return {
    movie: store.content.get('movies').find((movie) => { return movie._id === ownProps.params.id; })
  };
}, (dispatch) => {
  return {
    boundGetContent: bindActionCreators(getMovies, dispatch)
  };
})(Movie);

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { editMovie, addMovie, getMovie } from '../../../movie/Movie.Actions';

class FormMovie extends Component {
  componentWillMount() {
    const { boundGetMovie } = this.props;
    const { router: { params } } = this.context;
    params.id && boundGetMovie(params.id);
  }

  onAction = () => {
    const { boundAddMovie, boundEditMovie } = this.props;
    const { router } = this.context;

    const movie = {
      img: this.img.input.value,
      name: this.name.input.value,
      originalName: this.originalName.input.value,
      releaseDate: this.releaseDate.input.value,
      during: this.during.input.value,
      country: this.country.input.value
    };

    this.getAction() === 'edit' ? boundEditMovie(router.params.id, movie) : boundAddMovie(movie);
  }

  getAction = () => this.context.router.params.id ? 'edit' : 'new';

  mapMovieFileds = (movie) => {
    const sampleMovie = {
      img: '',
      name: '',
      originalName: '',
      country: '',
      releaseDate: '',
      during: ''
    };

    const movieFields = Object.entries(this.getAction() === 'new' ? sampleMovie : movie).map((arr, i) => {
      // [0: 'property', 1: 'value']
      if (arr[0][0] !== '_') {
        return (
          <TextField
            key={i}
            floatingLabelText={arr[0]}
            fullWidth
            ref={(name) => { this[arr[0]] = name; }}
            defaultValue={arr[1] || ''}
          />
        );
      } else {
        return false;
      }
    });

    return movieFields;
  };

  render() {
    const { movie } = this.props;
    const { router } = this.context;

    return (
      <div className="flex-container form-container">
        <div className="flex-container movie-form">

          { this.mapMovieFileds(movie.toJS()) }

          <Link to="/administration/admin" style={{ width: 'inherit' }}>
            <RaisedButton
              label={this.getAction() === 'new' ? 'Create' : 'Save'}
              onTouchTap={this.onAction}
              fullWidth
              className="form-btn"
            />
          </Link>

          <RaisedButton onTouchTap={() => { router.goBack(); }} label="Back" fullWidth className="form-btn"/>
        </div>
      </div>
    );
  }
}

FormMovie.propTypes = {
  movie: ImmutablePropTypes.map,
  boundAddMovie: PropTypes.func,
  boundGetMovie: PropTypes.func,
  boundEditMovie: PropTypes.func
};

FormMovie.contextTypes = {
  router: PropTypes.object
};

export default connect(({movie}) => {
  return {
    movie: movie.get('movie')
  };
}, (dispatch) => {
  return {
    boundGetMovie: bindActionCreators(getMovie, dispatch),
    boundAddMovie: bindActionCreators(addMovie, dispatch),
    boundEditMovie: bindActionCreators(editMovie, dispatch)
  };
})(FormMovie);

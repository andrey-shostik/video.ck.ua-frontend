import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ListContainer from '../components/listContainer/listContainer';
import { getMovies } from './Content.Actions';
import './Content.scss';
import Item from '../components/item/item';
import UserNotAuthorized from '../components/userNotAuthorized/userNotAuthorized';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { renderNotAuthorized: false };
  }

  componentWillMount() {
    const { boundGetContent, token } = this.props;
    if (token) {
      boundGetContent(token).then((res) => {
        res.error ? this.setState({ renderNotAuthorized: true });
      });
    }
  }

  movies = () => {
    return this.props.movies.toJS().map((movie) => {
      return <Item watch movie={movie} key={movie._id}/>
    });
  }

  render() {
    return (
      <div>
        { this.state.renderNotAuthorized
          ?
            <UserNotAuthorized/>
          :
            <ListContainer data={this.movies()}/>
        }
      </div>
    );
  }
}

Content.propTypes = {
  movies         : ImmutablePropTypes.list,
  boundGetContent: PropTypes.func,
  token          : PropTypes.string
};

export default connect(({content, signIn}, ownProps) => {
  return {
    movies: content.get('movies'),
    token : signIn.get('token')
  };
}, (dispatch) => {
  return {
    boundGetContent: bindActionCreators(getMovies, dispatch)
  };
})(Content);


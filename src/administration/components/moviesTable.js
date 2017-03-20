import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import DataActionsMenu from './dataActionsMenu/dataActionsMenu';
import { getMovies } from '../../content/Content.Actions';

class MoviesTable extends Component {
  state = { show: false };

  componentWillMount() {
    const { boundGetMovies } = this.props;
    boundGetMovies();
  }

  onRowSelected = (e, second, third) => {
    if (e.length) {
      this.setState({ show: true, selected: e[0] });
    } else {
      this.setState({ show: false, selected: null });
    }
  }

  mapTableColumns = (movie) => {
    const tableColumns = Object.keys(movie).map((field, i) => {
      if (field[0] !== '_') {
        return <TableHeaderColumn key={i} style={{ fontSize: '14px' }}>{field}</TableHeaderColumn>;
      } else {
        return null;
      }
    });
    return tableColumns;
  };

  mapTableRows = (movies) => {
    const tableRows = movies.map((object) => {
      const cells = Object.entries(object).map((arr, i) => {
        // [0: 'property', 1: 'value']
        if (arr[0][0] !== '_') {
          if (arr[0] === 'img') {
            return (
              <TableRowColumn key={i}>
                <img alt="movie" height="110px" width="80px" src={arr[1]}/>
              </TableRowColumn>
            );
          } else if (arr[0] === 'name') {
            return (
              <TableRowColumn style={{ fontSize: '14px' }} key={i} >
                <Link to={`/movies/${object._id}`}> {arr[1]} </Link>
              </TableRowColumn>
            );
          } else {
            return <TableRowColumn style={{ fontSize: '14px' }} key={i} >{arr[1]}</TableRowColumn>;
          }
        } else {
          return false;
        }
      });
      return <TableRow key={object._id}>{cells}</TableRow>;
    });

    return tableRows;
  };

  render() {
    const { movies, boundGetMovies } = this.props;
    const { show, selected } = this.state;

    return (
      <div>
        <DataActionsMenu
          show={show}
          selected={movies.toJS()[selected]}
          dataType="movies"
          boundGetMovies={boundGetMovies}
        />
        <Table onRowSelection={this.onRowSelected}>
          <TableHeader>
            <TableRow>
              { this.mapTableColumns(movies.toJS()[0]) }
            </TableRow>
          </TableHeader>
          <TableBody>
            { this.mapTableRows(movies.toJS()) }
          </TableBody>
        </Table>
      </div>
    );
  }
}

MoviesTable.propTypes = {
  movies: ImmutablePropTypes.list,
  boundGetMovies: PropTypes.func
};

export default connect((store) => {
  return {
    movies: store.content.get('movies')
  };
}, (dispatch) => {
  return {
    boundGetMovies: bindActionCreators(getMovies, dispatch)
  };
})(MoviesTable);

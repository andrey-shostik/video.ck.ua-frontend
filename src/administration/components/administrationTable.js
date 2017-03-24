import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';
import ImmutablePropTypes from 'react-immutable-proptypes';
import DataActionsMenu from './dataActionsMenu/dataActionsMenu';

class AdministrationTable extends Component {
  state = { show: false };

  componentWillMount() {
    const { boundGetData } = this.props;
    boundGetData();
  }

  onRowSelected = (e, second, third) => {
    if (e.length) {
      this.setState({ show: true, selected: e[0] });
    } else {
      this.setState({ show: false, selected: null });
    }
  }

  mapTableColumns = (object) => {
    const tableColumns = Object.keys(object).map((field, i) => {
      if (field[0] !== '_' && field !== 'password') {
        return <TableHeaderColumn key={i} style={{ fontSize: '14px' }}>{field}</TableHeaderColumn>;
      } else {
        return null;
      }
    });
    return tableColumns;
  };

  mapMovies = (movies) => {
    const tableRows = movies.map((movie) => {
      if (Object.values(movie).length > 1) {
        return (
          <TableRow key={movie._id} className="administrationRowData">
            <TableRowColumn>
              <img alt="movie" height="110px" width="80px" src={movie.img}/>
            </TableRowColumn>

            <TableRowColumn style={{ fontSize: '14px' }}>
              <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
            </TableRowColumn>

            <TableRowColumn>{movie.originalName}</TableRowColumn>
            <TableRowColumn>{movie.country}</TableRowColumn>
            <TableRowColumn>{movie.releaseDate}</TableRowColumn>
            <TableRowColumn>{movie.during}</TableRowColumn>
          </TableRow>
        );
      } else {
        return false;
      }
    });

    return tableRows;
  };

  mapUsers = (users) => {
    const tableRows = users.map((user) => {
      if (Object.values(user).length > 1) {
        return (
          <TableRow key={user._id} className="administrationRowData">
            <TableRowColumn>{ user.username }</TableRowColumn>
            <TableRowColumn>{ user.email }</TableRowColumn>
            <TableRowColumn>{ user.groups.join(', ') }</TableRowColumn>
          </TableRow>
        );
      } else {
        return null;
      }
    });

    return tableRows;
  };

  render() {
    const { data, boundGetData, dataType, boundRemoveData, group } = this.props;
    const { show, selected } = this.state;

    return (
      <div>
        <DataActionsMenu
          show={show}
          selected={data.toJS()[selected]}
          dataType={dataType}
          boundGetData={boundGetData}
          boundRemoveData={boundRemoveData}
          group={group}
        />
        <Table onRowSelection={this.onRowSelected}>
          <TableHeader>
            <TableRow>
              { this.mapTableColumns(data.toJS()[0]) }
            </TableRow>
          </TableHeader>
          <TableBody>
            { dataType === 'movies' ? this.mapMovies(data.toJS()) : this.mapUsers(data.toJS()) }
          </TableBody>
        </Table>
      </div>
    );
  }
}

AdministrationTable.propTypes = {
  data: ImmutablePropTypes.list,
  boundGetData: PropTypes.func,
  dataType: PropTypes.string,
  boundRemoveData: PropTypes.func,
  group: PropTypes.string
};

export default AdministrationTable;

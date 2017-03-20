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
    const tableRows = movies.map((object) => {
      const cells = Object.entries(object).map((arr, i) => {
        // [0: 'property', 1: 'value']
        if (arr[0][0] !== '_') {
          switch (arr[0]) {
            case 'img':
              return (
                <TableRowColumn key={i}>
                  <img alt="movie" height="110px" width="80px" src={arr[1]}/>
                </TableRowColumn>
              );
            case 'name':
              return (
                <TableRowColumn style={{ fontSize: '14px' }} key={i} >
                  <Link to={`/movies/${object._id}`}> {arr[1]} </Link>
                </TableRowColumn>
              );
            default:
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

  mapUsers = (users) => {
    const tableRows = users.map((object) => {
      const cells = Object.entries(object).map((arr, i) => {
        // [0: 'property', 1: 'value']
        if (arr[0][0] !== '_' && arr[0] !== 'password') {
          switch (arr[0]) {
            case 'groups':
              return (
                <TableRowColumn style={{ fontSize: '14px' }} key={i} > {arr[1].join(' ')} </TableRowColumn>
              );
            case 'username':
              return (
                <TableRowColumn style={{ fontSize: '14px' }} key={i} >
                  <Link to={`/users/${object._id}`}> {arr[1]} </Link>
                </TableRowColumn>
              );
            default:
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

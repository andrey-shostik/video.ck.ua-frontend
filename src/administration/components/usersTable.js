import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';

const UsersTable = ({ movies }) => {
  const mapTableColumns = (movie) => {
    const tableColumns = Object.keys(movie).map((field, i) => {
      if (field[0] !== '_') {
        return <TableHeaderColumn key={i} style={{ fontSize: '14px' }}>{field}</TableHeaderColumn>;
      } else {
        return null;
      }
    });
    return tableColumns;
  };

  const mapTableRows = () => {
    const tableRows = movies.map((object) => {
      const cells = Object.entries(object).map((arr, i) => {
        if (arr[0][0] !== '_') {
          if (arr[0] === 'img') {
            return (
              <TableRowColumn key={i}>
                <div className="flex-container">
                  <img alt="movie" height="110px" width="80px" src={arr[1]}/>
                </div>
              </TableRowColumn>
            );
          } else if (arr[0] === 'name') {
            return (
              <Link to="/" style={{ display: 'inline-block' }}>
                <div><TableRowColumn style={{ fontSize: '14px' }} key={i} >{arr[1]}</TableRowColumn></div>
              </Link>
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

  return (
    <Table selectable={false} >
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
        <TableRow>
          { mapTableColumns(movies[0]) }
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} deselectOnClickaway={false} showRowHover={false} stripedRows={false}>
        { mapTableRows() }
      </TableBody>
    </Table>
  );
};

UsersTable.propTypes = {
  movies: PropTypes.array
};

export default UsersTable;


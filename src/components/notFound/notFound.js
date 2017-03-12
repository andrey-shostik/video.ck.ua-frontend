import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './notFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="flex-container not-found-flex">
        <div className="not-found-code not-found-element">404</div>
        <div className="not-found-element"> Что то пошло не так. Страница не найдена</div>
        <div className="not-found-element">
          <Link to="/"> <RaisedButton label="Вернуться на главную"/> </Link>
        </div>
      </div>
    );
  }
}

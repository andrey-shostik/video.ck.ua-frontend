import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './notFound.scss';

const style = {
  margin: 12
};

const Btn = () => {
  return (
    <div>
      <RaisedButton label="Вернуться назад" style={style}/>
    </div>
  );
};

export default class NotFound extends Component {
  render() {
    return (
      <div className="flex-container not-found-flex">
        <div className="not-found-code">404</div>
        <div className="not-found-description"> Что то пошло не так. Страница не найдена</div>
        <Link to="/"><Btn/></Link>
      </div>
    );
  }
}

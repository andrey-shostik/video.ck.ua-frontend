import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import './item.scss';

const Item = (props) => {
  const { movie, watch } = props;
  return (
    <div className="flex-container section-element">
      <div>
        <img alt="movie" width="155" height="220" src={movie.img}/>
      </div>

      <div>
        <div className="element"><h2> {movie.name} </h2></div>
        <div className="element"> Оригинальное название: {movie.originalName} </div>
        <div className="element"> Страна: {movie.country} </div>
        <div className="element"> Дата: {movie.releaseDate} </div>
        <div className="element"> Продолжительность: {movie.during} </div>
        <ItemButton watch={watch} paramsId={movie._id}/>
      </div>
    </div>
  );
};

Item.propTypes = {
  movie: PropTypes.object,
  watch: PropTypes.bool
};

const ItemButton = ({ watch, paramsId }) => {
  if (watch) {
    return (
      <div className="element">
        <Link to={'/movie/' + paramsId}> <RaisedButton label="Смотреть"/> </Link>
      </div>
    );
  } else {
    return (
      <div className="element">
        <Link to="/"> <RaisedButton label="На главную"/></Link>
      </div>
    );
  }
};

ItemButton.propTypes = {
  watch: PropTypes.bool,
  paramsId: PropTypes.string
};

export default Item;

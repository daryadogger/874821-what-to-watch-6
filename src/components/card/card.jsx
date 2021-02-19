import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import cardProps from './card-props';
import CardView from './card-view';
import getCardById from './get-card-by-id';

const Card = (props) => {
  const {id, to, onActiveFilmChange} = props;
  const history = useHistory();

  const film = getCardById(id);
  if (film === null) {
    history.push(`/not-found-page`);
  }

  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    onActiveFilmChange({"id": id});
    setIsActive(true);

    // console.log("isActive", id);
  };

  const handleMouseLeave = () => {
    onActiveFilmChange({"id": null});
    setIsActive(false);

    // console.log(false);
  };

  return <>

    <CardView film={film} to={to} onActiveFilmChange={onActiveFilmChange} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} id={id} >
      {isActive ? <video src={film.videoLink} width="280" height="175" poster={film.posterImage} muted></video> : <img src={film.posterImage} alt={film.name} width="280" height="175" />}
    </CardView>

  </>;
};

Card.propTypes = cardProps;

export default Card;

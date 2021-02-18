import React from 'react';
import cardProps from './card-props';
import CardView from './card-view';
import getCardById from './get-card-by-id';

const Card = (props) => {
  const {id, to} = props;
  const film = getCardById(id);

  // isActive
  // {isActive ? <video src={film.videoLink} width="280" height="175" poster={film.posterImage} muted></video> : <img src={film.posterImage} alt={film.name} width="280" height="175" />}

  return <>
    {/* children={isActive} */}

    <CardView film={film} to={to}>
      {/* сюда видео или img тег */}
    </CardView>

  </>;
};

Card.propTypes = cardProps;

export default Card;

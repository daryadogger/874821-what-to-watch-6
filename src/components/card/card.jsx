import React from 'react';
import {Redirect} from 'react-router-dom';
import cardProps from './card.prop';
import CardView from './card-view';
import VideoPlayer from '../video-player/video-player';
import {shallowEqual, useSelector} from 'react-redux';

const Card = (props) => {
  const {id, to, onActiveFilmChange, isActive} = props;

  const film = useSelector((state) => state.films.find((el) => el.id === id), shallowEqual);
  if (film === null) {
    <Redirect to={`/not-found-page`} />;
  }

  const handleMouseEnter = () => {
    onActiveFilmChange(id);
  };

  const handleMouseLeave = () => {
    onActiveFilmChange(null);
  };

  return <>

    <CardView film={film.name} to={to} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} id={id} >
      <VideoPlayer isActive={isActive} src={film.previewVideoLink} posterImage={film.previewImage} width={280} height={175} alt={film.name} />
    </CardView>

  </>;
};

Card.propTypes = cardProps;

export default Card;

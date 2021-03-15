import React from 'react';
import {useHistory} from 'react-router-dom';
import cardProps from './card.prop';
import CardView from './card-view';
import VideoPlayer from '../video-player/video-player';
import {shallowEqual, useSelector} from 'react-redux';

const Card = (props) => {
  const {id, to, onActiveFilmChange, isActive} = props;

  const history = useHistory();

  const film = useSelector((state) => state.films.find((el) => el.id === id), shallowEqual);
  if (film === null) {
    history.push(`/not-found-page`);
  }

  const handleClick = () => {
    history.push(`/films/${id}`);
  };

  const handleMouseEnter = () => {
    onActiveFilmChange(id);
  };

  const handleMouseLeave = () => {
    onActiveFilmChange(null);
  };

  return (

    <CardView film={film.name} to={to} handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} id={id} >
      <VideoPlayer isActive={isActive} src={film.previewVideoLink} posterImage={film.previewImage} width={280} height={175} alt={film.name} />
    </CardView>

  );
};

Card.propTypes = cardProps;

export default React.memo(Card);

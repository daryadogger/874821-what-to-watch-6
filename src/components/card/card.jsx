import React from 'react';
import {useHistory} from 'react-router-dom';
import cardProps from './card.prop';
import CardView from './card-view';
import VideoPlayer from '../video-player/video-player';
import {shallowEqual, useSelector} from 'react-redux';

const Card = (props) => {
  const {id, to, onActiveFilmChange, isActive} = props;

  const history = useHistory();

  const film = useSelector(({FILMS}) => FILMS.films.find((el) => el.id === id), shallowEqual);
  if (film === null) {
    history.push(`/not-found-page`);
  }

  const {name, previewVideoLink, previewImage} = film;

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

    <CardView film={name} to={to} onClickHandler={handleClick} onMouseLeaveHandler={handleMouseLeave} onMouseEnterHandler={handleMouseEnter} id={id} >
      <VideoPlayer isActive={isActive} src={previewVideoLink} posterImage={previewImage} width={280} height={175} alt={name} />
    </CardView>

  );
};

Card.propTypes = cardProps;

export default React.memo(Card);

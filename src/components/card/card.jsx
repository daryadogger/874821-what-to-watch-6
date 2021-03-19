import React, {useCallback} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import cardProps from './card.prop';
import CardView from './card-view';
import VideoPlayer from '../video-player/video-player';
import {shallowEqual, useSelector} from 'react-redux';

// to storage ?
const selectFilmForCard = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);
  if (typeof (found) === `undefined`) {
    return undefined;
  }
  const {name, previewVideoLink, previewImage} = found;
  return {name, previewVideoLink, previewImage};
};

const useSelectFilmForCard = (id) => useSelector(({FILMS}) => selectFilmForCard(FILMS, id), shallowEqual);

const Card = (props) => {
  const {id, to, onActiveFilmChange, isActive} = props;

  const history = useHistory();

  const film = useSelectFilmForCard(id);

  const handleCardClick = useCallback(() => {
    history.push(`/films/${id}`);
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    onActiveFilmChange(id);
  }, [id]);

  const handleMouseLeave = useCallback(() => {
    onActiveFilmChange(null);
  }, []);


  if (film === null) {
    return <Redirect to={`/not-found-page`} />;
  }

  return (

    <CardView film={film.name} to={to} onClickHandler={handleCardClick} onMouseLeaveHandler={handleMouseLeave} onMouseEnterHandler={handleMouseEnter} id={id} >
      <VideoPlayer isActive={isActive} src={film.previewVideoLink} posterImage={film.previewImage} width={280} height={175} alt={film.name} />
    </CardView>

  );
};

Card.propTypes = cardProps;

export default Card;

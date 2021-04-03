import React, {useCallback} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import cardProps from './card.prop';
import CardView from './card-view';
import VideoPlayer from '../video-player/video-player';
import {Page} from '../../const';
import {useSelectFilmForCard} from '../../store/hooks/use-select-film-for-card';
import {getHrefToFilm} from '../../api/get-href';

const Card = (props) => {
  const {id, to, onActiveFilmChange, isActive} = props;

  const history = useHistory();

  const film = useSelectFilmForCard(id);

  const handleCardClick = useCallback(() => {
    history.push(getHrefToFilm(id));
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    onActiveFilmChange(id);
  }, [id]);

  const handleMouseLeave = useCallback(() => {
    onActiveFilmChange(null);
  }, []);


  if (film === null) {
    return <Redirect to={Page.NOT_FOUND_PAGE} />;
  }

  return (

    <CardView film={film.name} to={to} onClickHandler={handleCardClick} onMouseLeaveHandler={handleMouseLeave} onMouseEnterHandler={handleMouseEnter} id={id} >
      <VideoPlayer isActive={isActive} src={film.previewVideoLink} posterImage={film.previewImage} width={280} height={175} alt={film.name} />
    </CardView>

  );
};

Card.propTypes = cardProps;

export default Card;

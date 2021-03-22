import React, {useState, useEffect, useCallback} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {DELAY_TIME, Pages} from '../../const';
import CardsListView from '../cards-list/cards-list-view';
import cardsListProps from '../cards-list/cards-list.prop';

// to storage ?
const selectFilmArray = (FILMS, genre, isUpperCase) => {
  const found = FILMS.films.filter((film) => genre === `` || (isUpperCase ? film.genre === genre : film.genre.toLowerCase() === genre)).map((film) => film.id);
  return found;
};

const useSelectFilmArray = (genre, isUpperCase) => useSelector(({FILMS}) => selectFilmArray(FILMS, genre, isUpperCase), shallowEqual);


const CardsList = (props) => {
  const {genre, enableButton, initialCount, isUpperCase, currentFilmId, favoriteFilms} = props;

  const filmsUrl = Pages.FILMS;
  let idArray = useSelectFilmArray(genre, isUpperCase);

  let favoriteIdArray = [];

  if (favoriteFilms) {
    favoriteIdArray = favoriteFilms.map((film) => film.id);
  }

  if (currentFilmId) {
    idArray = idArray.filter((id) => {
      return id !== currentFilmId;
    });
  }

  const [activeFilmId, setActiveFilmId] = useState(null);
  const [nextFilmId, setNextFilmId] = useState(null);
  const [count, setCount] = useState(initialCount);

  const handleShowMore = useCallback(() => {
    setCount(count + 8);
  }, [count]);

  const handleActiveFilmChange = useCallback((id) => {
    setNextFilmId(id);

    if (id === null) {
      setActiveFilmId(id);
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {

      setActiveFilmId(nextFilmId);

    }, DELAY_TIME);
    return () => {
      clearTimeout(timerId);
    };
  }, [nextFilmId]);

  return (

    <CardsListView idArray={favoriteFilms ? favoriteIdArray : idArray.slice(0, count)} filmsUrl={filmsUrl} activeFilmId={activeFilmId} onActiveFilmChange={handleActiveFilmChange} isButtonHidden={!enableButton || count >= idArray.length} onShowMore={handleShowMore} />

  );
};

CardsList.propTypes = cardsListProps;

export default CardsList;

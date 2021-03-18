import React, {useState, useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import CardsListView from '../cards-list/cards-list-view';
import cardsListProps from '../cards-list/cards-list.prop';

const DELAY_TIME = 1000;

const CardsList = (props) => {
  const {genre, enableButton, initialCount, isUpperCase, currentFilmId, favoriteFilms} = props;

  const filmsUrl = `/films`;
  let idArray = useSelector(({FILMS}) => FILMS.films.filter((film) => genre === `` || (isUpperCase ? film.genre === genre : film.genre.toLowerCase() === genre)).map((film) => film.id), shallowEqual);

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

  const handleShowMore = () => {
    setCount(count + 8);
  };

  const handleActiveFilmChange = (id) => {
    setNextFilmId(id);

    if (id === null) {
      setActiveFilmId(id);
    }
  };

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

export default React.memo(CardsList);

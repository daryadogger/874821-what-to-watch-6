import React, {useState, useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import CardsListView from '../cards-list/cards-list-view';
import cardsListProps from '../cards-list/cards-list.prop';
import {useFilmList} from '../../api/use-film-list';

const CardsList = (props) => {
  const {genre, count} = props;

  const filmsUrl = `/films`;
  const DELAY_TIME = 1000;
  // const MAX_COUNT_OF_FILMS = 8;

  // const [count, setCount] = useState(defaultCount || MAX_COUNT_OF_FILMS);

  const idArray = useSelector((state) => state.films.filter((film) => genre === `` || film.genre === genre).map((film) => film.id), shallowEqual);

  const [activeFilmId, setActiveFilmId] = useState(null);
  const [nextFilmId, setNextFilmId] = useState(null);

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

  useFilmList(idArray);

  return <>

    <CardsListView idArray={idArray.slice(0, count)} filmsUrl={filmsUrl} activeFilmId={activeFilmId} onActiveFilmChange={handleActiveFilmChange} />

  </>;
};

CardsList.propTypes = cardsListProps;

export default CardsList;

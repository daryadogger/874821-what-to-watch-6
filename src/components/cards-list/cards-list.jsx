import React, {useState, useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import CardsListView from '../cards-list/cards-list-view';
import cardsListProps from '../cards-list/cards-list.prop';

const CardsList = (props) => {
  const {genre, enableButton, initialCount} = props;

  const filmsUrl = `/films`;
  const DELAY_TIME = 1000;

  const idArray = useSelector((state) => state.films.filter((film) => genre === `` || film.genre.toLowerCase() === genre).map((film) => film.id), shallowEqual);

  const [activeFilmId, setActiveFilmId] = useState(null);
  const [nextFilmId, setNextFilmId] = useState(null);
  const [count, setCount] = useState(initialCount);

  const onShowMore = () => {
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

  return <>

    <CardsListView idArray={idArray.slice(0, count)} filmsUrl={filmsUrl} activeFilmId={activeFilmId} onActiveFilmChange={handleActiveFilmChange} isButtonHidden={!enableButton || count >= idArray.length} onShowMore={onShowMore} />

  </>;
};

CardsList.propTypes = cardsListProps;

export default CardsList;

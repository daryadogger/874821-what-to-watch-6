import React, {useState, useEffect} from 'react';
import CardsListView from '../cards-list/cards-list-view';
import {getFilmsIds, loadFilmsIds} from '../../mocks/server-data';
import cardsListProps from '../cards-list/card-list.prop';

const CardsList = (props) => {
  const {defaultCount} = props;

  const filmsUrl = `/films`;
  const DELAY_TIME = 1000;

  const [count, setCount] = useState(defaultCount || 8);
  const [idArray, setIdArray] = useState(getFilmsIds());
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

  useEffect(()=> {
    loadFilmsIds().then(() => {
      setIdArray(getFilmsIds());
    });
  }, [idArray]);

  return <>

    <CardsListView idArray={idArray.slice(0, count)} filmsUrl={filmsUrl} activeFilmId={activeFilmId} onActiveFilmChange={handleActiveFilmChange} onShowMore={()=> {
      setCount(count + 8);
    }} />

  </>;
};

CardsList.propTypes = cardsListProps;

export default CardsList;

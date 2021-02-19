import React, {useState} from 'react';
import CardsListView from '../cards-list/cards-list-view';

const CardsList = () => {
  const filmsUrl = `/films`;
  const idArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [activeFilmId, setActiveFilmId] = useState({id: null});
  const handleActiveFilmChange = (film) => {
    setActiveFilmId({...activeFilmId, id: film.id});
  };
  // {console.log(activeFilmId)}

  return <>

    <CardsListView
      idArray={idArray}
      filmsUrl={filmsUrl}
      onActiveFilmChange={handleActiveFilmChange}
    />

  </>;
};

export default CardsList;

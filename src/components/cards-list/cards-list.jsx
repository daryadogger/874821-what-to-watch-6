import React, {useState} from 'react';
import CardsListView from '../cards-list/cards-list-view';

const CardsList = () => {
  const filmsUrl = `/films`;
  const idArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [activeFilmId, setActiveFilmId] = useState({id: null});
  const [isActive, setIsActive] = useState(false);
  const handleActiveFilmChange = (film, bool) => {
    setActiveFilmId({...activeFilmId, id: film.id});
    setIsActive(bool);
  };

  // {console.log(isActive)}
  // {console.log(activeFilmId.id)}

  return <>

    <CardsListView idArray={idArray} filmsUrl={filmsUrl} isActive={isActive} activeFilmId={activeFilmId.id} onActiveFilmChange={handleActiveFilmChange} />

  </>;
};

export default CardsList;

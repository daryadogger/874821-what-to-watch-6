import React, {useState} from 'react';
import CardsListView from '../cards-list/cards-list-view';

const CardsList = () => {
  const filmsUrl = `/films`;
  const idArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const activeFilmId = 3;

  return <>

    <CardsListView
      activeFilmId={activeFilmId}
      idArray={idArray}
      filmsUrl={filmsUrl}
    />

  </>;
};

export default CardsList;

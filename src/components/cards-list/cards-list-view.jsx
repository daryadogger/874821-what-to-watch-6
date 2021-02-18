import React from 'react';
import Card from '../card/card';
import cardsListProps from './cards-list-props';

const CardsListView = (props) => {
  const {idArray, activeFilmId, filmsUrl} = props;

  return <>

    <div className="catalog__movies-list">
      {idArray.map((id) => <Card key={id} id={id} to={`${filmsUrl}/${id}`} />)}
    </div>

  </>;
};

CardsListView.propTypes = cardsListProps;

export default CardsListView;

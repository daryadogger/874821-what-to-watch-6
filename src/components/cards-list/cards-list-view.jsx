import React from 'react';
import Card from '../card/card';
import cardsListViewProps from './cards-list-view.prop';

const CardsListView = (props) => {
  const {idArray, onActiveFilmChange, filmsUrl, activeFilmId} = props;

  return <>

    <div className="catalog__movies-list">
      {idArray.map((id) => <Card key={id} id={id} to={`${filmsUrl}/${id}`} onActiveFilmChange={onActiveFilmChange} isActive={id === activeFilmId} />)}
    </div>

  </>;
};

CardsListView.propTypes = cardsListViewProps;

export default CardsListView;

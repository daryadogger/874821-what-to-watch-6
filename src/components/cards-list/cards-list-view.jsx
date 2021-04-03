import React from 'react';
import BtnShowMore from '../btn-show-more/btn-show-more';
import Card from '../card/card';
import cardsListViewProps from './cards-list-view.prop';

const CardsListView = (props) => {
  const {idArray, onActiveFilmChange, filmsUrl, activeFilmId, isButtonHidden, onBtnShowMoreClick} = props;

  return <>

    <div className="catalog__movies-list">
      {idArray.map((id) => <Card key={`card-${id}`} id={id} to={`${filmsUrl}/${id}`} onActiveFilmChange={onActiveFilmChange} isActive={id === activeFilmId} />)}
    </div>

    <BtnShowMore onBtnShowMoreClick={onBtnShowMoreClick} isHidden={isButtonHidden} />

  </>;
};

CardsListView.propTypes = cardsListViewProps;

export default CardsListView;

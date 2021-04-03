import React from 'react';
import btnShowMoreProps from '../btn-show-more/btn-show-more.prop';

const BtnShowMore = (props) => {
  const {onBtnShowMoreClick, isHidden} = props;

  const handleButtonClick = () => {
    onBtnShowMoreClick();
  };

  return (

    <div className="catalog__more" onClick={handleButtonClick} >
      <button className={`${isHidden ? `visually-hidden` : `catalog__button`}`} type="button">Show more</button>
    </div>

  );
};

BtnShowMore.propTypes = btnShowMoreProps;

export default BtnShowMore;

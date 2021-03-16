import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Api from '../../api/api';
import getButtonsIcon from '../../api/get-buttons-icon';
import {changeFavoriteStatus} from '../../store/action';
import favoriteButtonProps from './favorite-button.prop';

const FavoriteStatus = {
  FAVOURITE: 1,
  NOT_FAVORITE: 0
};

const FavoriteButton = (props) => {
  const {isFavorite, id} = props;

  const api = new Api();
  const dispatch = useDispatch();
  const [icon, setIcon] = useState(getButtonsIcon(isFavorite));

  const changeStatus = (filmId, status) => {
    api.postFavoriteFilm(filmId, status)
      .then((data) => {
        dispatch(changeFavoriteStatus(data));
      });
    // .catch((error) => {
    //   setErrorMessage(error.message);
    // });

    return;
  };

  const handleClick = () => {
    const newStatus = isFavorite ? FavoriteStatus.NOT_FAVORITE : FavoriteStatus.FAVOURITE;
    changeStatus(id, newStatus);

    setIcon(getButtonsIcon(isFavorite));
  };

  return (

    <button onClick={handleClick} className="btn btn--list movie-card__button" type="button">
      {icon}
      <span>My list</span>
    </button>

  );
};

FavoriteButton.propTypes = favoriteButtonProps;

export default FavoriteButton;

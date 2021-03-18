import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import getButtonsIcon from '../../api/get-buttons-icon';
import {FavoriteStatus} from '../../const';
import {changeFavoriteStatus} from '../../store/action';
import favoriteButtonProps from './favorite-button.prop';

const FavoriteButton = (props) => {
  const {id} = props;

  const isFavorite = useSelector(({FILMS}) => FILMS.films.find((el) => el.id === id).isFavorite);

  const api = new Api();
  const dispatch = useDispatch();
  const [icon, setIcon] = useState(getButtonsIcon(isFavorite));

  const changeStatus = (filmId, status) => {
    api.postFavoriteFilm(filmId, status)
      .then((data) => {
        dispatch(changeFavoriteStatus(data.id, status));
      });
    // .catch((error) => {
    //   setErrorMessage(error.message);
    // });

    return;
  };

  const handleBtnClick = () => {
    const newStatus = isFavorite ? FavoriteStatus.NOT_FAVORITE : FavoriteStatus.FAVOURITE;
    changeStatus(id, newStatus);

    setIcon(getButtonsIcon(isFavorite));
  };

  return (

    <button onClick={handleBtnClick} className="btn btn--list movie-card__button" type="button">
      {icon}
      <span>My list</span>
    </button>

  );
};

FavoriteButton.propTypes = favoriteButtonProps;

export default FavoriteButton;

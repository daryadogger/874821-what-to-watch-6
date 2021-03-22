import React, {useCallback, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import getButtonsIcon from '../../api/get-buttons-icon';
import {FavoriteStatus} from '../../const';
import {changeFavoriteStatus} from '../../store/action';
import favoriteButtonProps from './favorite-button.prop';

// to storage ?
const selectFavoriteStatus = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id).isFavorite;
  return found;
};

const useSelectFavoriteStatus = (id) => useSelector(({FILMS}) => selectFavoriteStatus(FILMS, id), shallowEqual);


const FavoriteButton = (props) => {
  const {id} = props;

  const isFavorite = useSelectFavoriteStatus(id);

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

  const handleBtnClick = useCallback(() => {
    const newStatus = isFavorite ? FavoriteStatus.NOT_FAVORITE : FavoriteStatus.FAVOURITE;
    changeStatus(id, newStatus);

    setIcon(getButtonsIcon(isFavorite));
  }, [id, isFavorite]);

  return (

    <button onClick={handleBtnClick} className="btn btn--list movie-card__button" type="button">
      {icon}
      <span>My list</span>
    </button>

  );
};

FavoriteButton.propTypes = favoriteButtonProps;

export default FavoriteButton;

import {combineReducers} from 'redux';
import {commentsData} from './comments-data/comments-data';
import {favoriteFilmsData} from './favorite-films-data/favorite-films-data';
import {filmsData} from './films-data/films-data';
import {promoFilmData} from './promo-film-data/promo-film-data';
import {userData} from './user-data/user-data';


export const NameSpace = {
  FILMS: `FILMS`,
  FAVORITES: `FAVORITES`,
  COMMENTS: `COMMENTS`,
  PROMO: `PROMO`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.FAVORITES]: favoriteFilmsData,
  [NameSpace.COMMENTS]: commentsData,
  [NameSpace.PROMO]: promoFilmData,
  [NameSpace.USER]: userData,
});

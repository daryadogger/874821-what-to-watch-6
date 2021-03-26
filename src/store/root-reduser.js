import {combineReducers} from 'redux';
import {comments} from './comments/comments';
import {error} from './error/error';
import {favoriteFilmsData} from './favorite-films-data/favorite-films-data';
import {filmsData} from './films-data/films-data';
import {promoFilm} from './promo-film/promo-film';
import {user} from './user/user';


export const NameSpace = {
  FILMS: `FILMS`,
  FAVORITES: `FAVORITES`,
  COMMENTS: `COMMENTS`,
  PROMO: `PROMO`,
  USER: `USER`,
  ERROR: `ERROR`
};

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.FAVORITES]: favoriteFilmsData,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.PROMO]: promoFilm,
  [NameSpace.USER]: user,
  [NameSpace.ERROR]: error,
});

import {combineReducers} from 'redux';
import {comments} from './comments/comments';
import {error} from './error/error';
import {films} from './films/films';
import {promoFilm} from './promo-film/promo-film';
import {user} from './user/user';


export const NameSpace = {
  FILMS: `FILMS`,
  COMMENTS: `COMMENTS`,
  PROMO: `PROMO`,
  USER: `USER`,
  ERROR: `ERROR`
};

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.PROMO]: promoFilm,
  [NameSpace.USER]: user,
  [NameSpace.ERROR]: error,
});

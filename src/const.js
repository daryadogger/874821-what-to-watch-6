const RATINGS_COUNT = 10;
const SECONDS_IN_HOUR = 60;
const DELAY_TIME = 1000;
const COUNT_OF_SIMULAR_FILMS = 4;
const GENRES_COUNT = 9;
const MAX_COUNT_OF_FILMS = 8;
const TOGGLER_WIDTH = 17;
const ALL_GENRES = `All genres`;

const ERROR_EMPTY_INPUTS = `Please enter all inputs`;

const MouseEvents = {
  MOVE: `mousemove`,
  UP: `mouseup`
};

const ReviewLength = {
  MIN: 50,
  MAX: 400
};

const FavoriteStatus = {
  FAVOURITE: 1,
  NOT_FAVORITE: 0
};

const Tabs = {
  DETAILS: `details`,
  REVIEWS: `reviews`,
};

const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  ADD_REVIEW: `/films/:id/review`,
  FILM: `/films/:id/:tab?`,
  PLAYER: `/player/:id`,
  CATALOG: `/catalog/:genre`
};

const Pages = {
  NOT_FOUND_PAGE: `/not-found-page`,
  FILMS: `/films`,
  REVIEW: `review`,
  MAIN: `/`,
  CATALOG: `/catalog`,
  PLAYER: `/player`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`
};

export {RATINGS_COUNT, ReviewLength, SECONDS_IN_HOUR, DELAY_TIME, FavoriteStatus, COUNT_OF_SIMULAR_FILMS, GENRES_COUNT, MAX_COUNT_OF_FILMS, TOGGLER_WIDTH, MouseEvents, Tabs, AppRoute, Pages, ALL_GENRES, ERROR_EMPTY_INPUTS};

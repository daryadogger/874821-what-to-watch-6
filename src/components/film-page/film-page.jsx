import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import {ActionCreator} from '../../store/action';

const selectContent = (tab) => {
  switch (tab) {
    case `details`:
      return FilmDetails;

    case `reviews`:
      return FilmReviews;

    default:
      return FilmOverview;
  }
};

const FilmPage = () => {
  const {tab, id} = useParams();
  const api = new Api();
  const currFilm = useSelector((state) => state.film);
  const loaded = Object.keys(currFilm).length !== 0;

  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFilmById(id).then((film) => {
      dispatch(ActionCreator.getFilmById(film));
    });

  }, [loaded]);


  const currentFilm = useSelector((state) => state.films.find((el) => el.id === Number(id)));

  const Content = selectContent(tab);

  if (typeof (currentFilm) === `undefined`) {
    return null;
  }

  return <>

    <FilmPageFrame posterImage={currentFilm.posterImage} backgroundImage={currentFilm.backgroundImage} name={currentFilm.name} genre={currentFilm.genre} released={currentFilm.released} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  </>;
};

export default FilmPage;

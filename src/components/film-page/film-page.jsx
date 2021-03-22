import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {Pages} from '../../const';
import {useSelectFilm} from '../../store/hooks/use-select-film';
import selectContent from '../../store/hooks/use-select-content';

const FilmPage = () => {
  const {tab, id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilm(numberId);
  const {posterImage, backgroundImage, name, genre, released, isFavorite} = currentFilm;

  const Content = selectContent(tab);

  if (typeof (currentFilm) === `undefined`) {
    return <Redirect to={Pages.NOT_FOUND_PAGE} />;
  }

  return (

    <FilmPageFrame posterImage={posterImage} backgroundImage={backgroundImage} name={name} genre={genre} released={released} isFavorite={isFavorite} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  );
};

export default FilmPage;

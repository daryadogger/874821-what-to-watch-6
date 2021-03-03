import React, {useState, useEffect} from 'react';
import CardsList from '../cards-list/cards-list';
import mainPageProps from './main-page.prop';
import GenresList from '../genres-list/genres-list';
import {updateGenre} from '../../api/use-film-list';
import BtnShowMore from '../btn-show-more/btn-show-more';
import {loadFilms} from '../../mocks/server-data';


const MainPage = (props) => {
  const {promoCard} = props;
  const {name, genre, src, year} = promoCard;

  const MAX_COUNT_OF_FILMS = 8;
  const [count, setCount] = useState(MAX_COUNT_OF_FILMS);

  const [filmGenre, setFilmGenre] = useState(``);

  updateGenre(filmGenre);

  const onShowMore = () => {
    setCount(count + 8);
  };

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    loadFilms().then((films) => {
      if (count >= films.length) {
        setIsHidden(true);
      }
    });

  }, [count]);

  return <>

    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={src} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList genre={filmGenre} setGenre={setFilmGenre} />

        <CardsList genre={filmGenre} count={count} />

        <BtnShowMore onShowMore={onShowMore} isHidden={isHidden} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  </>;
};

MainPage.propTypes = mainPageProps;

export default MainPage;

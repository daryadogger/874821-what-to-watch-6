import React from 'react';
import CardsList from '../cards-list/cards-list';
import mainPageViewProps from '../main-page/main-page-view.prop';
import GenresList from '../genres-list/genres-list';
import PromoFilm from '../promo-film/promo-film';
import ErrorScreen from '../error-screen/error-screen';


const MainPageView = (props) => {
  const {filmGenre, initialCount, errorStatus} = props;

  return <>
    {(errorStatus) ? (
      <ErrorScreen />
    ) : (null)}

    <PromoFilm />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList genre={filmGenre} />

        <CardsList genre={filmGenre} initialCount={initialCount} enableButton={true} />

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

MainPageView.propTypes = mainPageViewProps;

export default MainPageView;

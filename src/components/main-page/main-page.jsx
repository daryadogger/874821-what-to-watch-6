import React, {useState, useEffect} from 'react';
import mainPageProps from './main-page.prop';
import MainPageView from '../main-page/main-page-view';
import {loadFilms} from '../../mocks/server-data';
import {updateGenre} from '../../api/use-film-list';


const MainPage = (props) => {
  const {promoCard} = props;

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

    <MainPageView promoCard={promoCard} filmGenre={filmGenre} setFilmGenre={setFilmGenre} count={count} onShowMore={onShowMore} isHidden={isHidden} />

  </>;
};

MainPage.propTypes = mainPageProps;

export default MainPage;

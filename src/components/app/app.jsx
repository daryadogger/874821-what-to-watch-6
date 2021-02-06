import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {cards} = props;
  const {mainCard} = props;

  return (
    <MainPage cards={cards} mainCard={mainCard} />
  );
};

App.propTypes = {
  cards: {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  },
  mainCard: {
    filmName: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  }
};

export default App;

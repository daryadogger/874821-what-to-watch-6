import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

const promoCard = {
  "name": `The Grand Budapest Hotel`,
  "genre": `Drama`,
  "year": 2014,
  "src": `img/the-grand-budapest-hotel-poster.jpg`
};

ReactDOM.render(
    <App
      films={films} promoCard={promoCard}
    />,
    document.querySelector(`#root`)
);

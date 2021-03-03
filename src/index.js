import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reduser} from './store/reduser';

const promoCard = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  src: `img/the-grand-budapest-hotel-poster.jpg`
};

const store = createStore(
    reduser,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store} >
      <App
        promoCard={promoCard}
      />
    </Provider>,
    document.querySelector(`#root`)
);

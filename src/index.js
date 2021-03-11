import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reduser} from './store/reduser';

const store = createStore(
    reduser,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store} >
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

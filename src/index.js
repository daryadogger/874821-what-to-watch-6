import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import rootReduser from './store/root-reduser';

const store = createStore(
    rootReduser,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store} >
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

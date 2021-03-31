import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import rootReduser from './store/root-reduser';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';

const store = createStore(
    rootReduser,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

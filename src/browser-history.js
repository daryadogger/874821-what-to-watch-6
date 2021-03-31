import React from "react";
import {render} from '@testing-library/react';
import {createBrowserHistory, createMemoryHistory} from 'history';
import {Router} from "react-router-dom";

const browserHistory = createBrowserHistory();
export default browserHistory;

export function renderWithRouter(ui, {route = `/`, history = createMemoryHistory({initialEntries: [route]})} = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

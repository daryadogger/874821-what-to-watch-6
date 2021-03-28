import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore({});
// describe(`Тестирование маршрутов`, () => {
//   jest.spyOn(redux, `useSelector`);
//   jest.spyOn(redux, `useDispatch`);
//   it(`Отображает 'NotFoundScreen' когда пользователь перешел на несуществующий маршрут`, () => {
//     const history = createMemoryHistory();
//     history.push(`/non-existent-route`);

//     render(
//         <redux.Provider store={mockStore({})}>
//           <Router history={history}>
//             <App />
//           </Router>
//         </redux.Provider>
//     );

//     expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
//     expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
//   });
// });

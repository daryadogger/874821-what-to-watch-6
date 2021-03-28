import React from 'react';
import {
  fireEvent,
  render
} from '@testing-library/react';
import {
  MemoryRouter,
  Router
} from 'react-router-dom';
import NotFoundPage from './not-found-page';
import { renderWithRouter } from '../../browser-history';
import {Provider} from "react-redux"
import createMockStore from 'redux-mock-store';


describe(``, () => {
  const linkLable = `Вернуться на главную`;
  it(`Находит текстовое содержимое в компоненте NotFoundPage`, () => {
    const {
      getByText
    } = render(<MemoryRouter><NotFoundPage /></MemoryRouter>);
    const headerElement = getByText(`404. Page not found`);
    const linkElement = getByText(linkLable);

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
  
  it(`осуществляет переход на начальный экран, когда тыкают на 'Вернуться на главную'`,()=>{
    const {getByText,history} = renderWithRouter(<NotFoundPage/>);
    const el = getByText(linkLable);
    fireEvent.click(el);
    expect(history.location.pathname).toBe(`/`);
  })
});
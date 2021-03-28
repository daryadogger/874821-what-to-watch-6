import Api from './api';

const mockFetchWithTimeout = jest.fn();
const mockProcessResponse = jest.fn();

jest.mock(`./api`, () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchWithTimeout: mockFetchWithTimeout,
      processResponse: mockProcessResponse
    };
  });
});

describe(`Тестирование api 'loadFilms'`, () => {
  it(`Возвращает null, если сервер вернул не массив`, async () => {

    const data = await api.loadFilms();
    expect(data).toBeDefined();
  });

});

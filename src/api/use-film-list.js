import {useEffect} from 'react';
import {ActionCreator} from '../store/action';
import {useDispatch} from 'react-redux';
import {loadFilms} from '../mocks/server-data';

export const useFilmList = (idArray) => {
  const dispatch = useDispatch();

  useEffect(()=> {

    loadFilms().then((films) => {
      dispatch(ActionCreator.getFilmsList(films));
    });

  }, [idArray]);
};

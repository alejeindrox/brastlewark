import { GET_GNOMES, GNOMES_LOADING } from './types';
import { getGnomesLocal } from '../services/gnomeService';

export const getGnomes = () => async dispatch => {
  dispatch(setGnomesLoading());
  const gnomes = await getGnomesLocal();
  dispatch({
    type: GET_GNOMES,
    payload: gnomes
  })
};

export const setGnomesLoading = () => {
  return {
    type: GNOMES_LOADING
  };
};
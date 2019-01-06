import { GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from './types';
import {
  getFavoritesLocal,
  addFavoriteLocal,
  deleteFavoriteLocal
} from '../services/favoriteService';

export const getFavorites = () => dispatch => {
  const favorites = getFavoritesLocal();
  dispatch({
    type: GET_FAVORITES,
    payload: favorites
  })
};

export const addFavorite = favorite => dispatch => {
  addFavoriteLocal(favorite);
  dispatch({
    type: ADD_FAVORITE,
    payload: favorite
  })
};

export const deleteFavorite = id => dispatch => {
  deleteFavoriteLocal(id);
  dispatch({
    type: DELETE_FAVORITE,
    payload: id
  })
};

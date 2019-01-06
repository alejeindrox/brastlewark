import {
  GET_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE
} from '../actions/types';

const initialState = {
  favorites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
      };
    default:
      return state;
  }
}

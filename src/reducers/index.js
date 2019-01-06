import { combineReducers } from 'redux';
import gnomeReducer from './gnomeReducer';
import favoriteReducer from './favoriteReducer';
import pendingReducer from './pendingReducer';
import recentReducer from './recentReducer';

export default combineReducers({
  gnomes: gnomeReducer,
  favorites: favoriteReducer,
  pendings: pendingReducer,
  recents: recentReducer
});
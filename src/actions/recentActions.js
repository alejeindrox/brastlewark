import { GET_RECENTS, ADD_RECENT } from './types';
import {
  getRecentsLocal,
  addRecentLocal
} from '../services/recentService';

export const getRecents = () => dispatch => {
  const recent = getRecentsLocal();
  dispatch({
    type: GET_RECENTS,
    payload: recent
  })
};

export const addRecent = recent => dispatch => {
  addRecentLocal(recent);
  dispatch({
    type: ADD_RECENT,
    payload: recent
  })
};
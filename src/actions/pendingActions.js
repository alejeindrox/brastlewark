import { GET_PENDINGS, ADD_PENDING, DELETE_PENDING } from './types';
import {
  getPendingsLocal,
  addPendingLocal,
  deletePendingLocal
} from '../services/pendingService';

export const getPendings = () => dispatch => {
  const pending = getPendingsLocal();
  dispatch({
    type: GET_PENDINGS,
    payload: pending
  })
};

export const addPending = pending => dispatch => {
  addPendingLocal(pending);
  dispatch({
    type: ADD_PENDING,
    payload: pending
  })
};

export const deletePending = id => dispatch => {
  deletePendingLocal(id);
  dispatch({
    type: DELETE_PENDING,
    payload: id
  })
};

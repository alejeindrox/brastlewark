import {
  GET_PENDINGS,
  ADD_PENDING,
  DELETE_PENDING
} from '../actions/types';

const initialState = {
  pendings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PENDINGS:
      return {
        ...state,
        pendings: action.payload
      };
    case ADD_PENDING:
      return {
        ...state,
        pendings: [...state.pendings, action.payload]
      };
    case DELETE_PENDING:
      return {
        ...state,
        pendings: state.pendings.filter(pending => pending.id !== action.payload)
      };
    default:
      return state;
  }
}

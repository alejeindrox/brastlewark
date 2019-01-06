import {
  GET_RECENTS,
  ADD_RECENT
} from '../actions/types';

const initialState = {
  recents: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECENTS:
      return {
        ...state,
        recents: action.payload
      };
    case ADD_RECENT:
      return {
        ...state,
        recents: [action.payload, ...state.recents]
      };
    default:
      return state;
  }
}

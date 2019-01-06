import { GET_GNOMES, GNOMES_LOADING } from '../actions/types';

const initialState = {
  gnomes: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GNOMES:
      return {
        ...state,
        gnomes: action.payload,
        loading: false
      };
    case GNOMES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

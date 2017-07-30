import { RECEIVE_RECOMMENDATIONS } from '../actions/page-actions';

const stuffReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RECOMMENDATIONS:
      return action.data;

    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import { ADD_PRODUCT } from '../actions';

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.productId];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
          ...state,
          [action.productId]: {
            id: action.productId,
            name: action.name,
          }
      };
    default:
      return state;
  }
};

export default combineReducers({
    byId,
    allIds
});

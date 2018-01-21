const dotProp = require('dot-prop-immutable');
import { combineReducers } from 'redux';
import { ADD_STOCK, ADD_PRODUCT } from '../actions';

const allIds = (state = ['default'], action) => {
  switch (action.type) {
    case ADD_STOCK:
      return [...state, action.id];
    default:
      return state;
  }
};

const byId = (state = {
  default: {
    id: 'default',
    name: 'Main',
    products: [],
  }
}, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          products: [],
        }
      };
    case ADD_PRODUCT:
      return dotProp.set(
        state,
        `${action.stockId}.products`,
        products => [...products, action.productId],
      );
    default:
      return state;
  }
};

export default combineReducers({
    byId,
    allIds
});

import { combineReducers } from 'redux';

import products from './products';
import stocks from './stocks';

export default combineReducers({
  products,
  stocks,
});
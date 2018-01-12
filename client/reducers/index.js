import { combineReducers } from 'redux';
import products from './products';
import stocks from './stocks';
import stocksFilter from './stocksFilter';

const stockApp = combineReducers({
  products,
  stocks,
  stocksFilter
});

export default stockApp;

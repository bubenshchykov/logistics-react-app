import * as types from '../constants/ActionTypes';

export const addStock = (name, id) => ({
  type: types.ADD_STOCK,
  name,
  id,
});

export const addProduct = (name, productId, stockId) => ({
  type: types.ADD_PRODUCT,
  name,
  productId,
  stockId,
});

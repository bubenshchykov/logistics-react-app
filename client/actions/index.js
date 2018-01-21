export const ADD_STOCK = 'ADD_STOCK';
export const addStock = (name, id) => ({
  type: ADD_STOCK,
  name,
  id,
});


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (name, productId, stockId) => ({
  type: ADD_PRODUCT,
  name,
  productId,
  stockId,
});

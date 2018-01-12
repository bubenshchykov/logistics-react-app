const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: product.id,
          name: action.name,
          quantity: action.quantity
        }
      ]
    case 'REMOVE_PRODUCT':
      return state;
    default:
      return state;
  }
}

export default products;

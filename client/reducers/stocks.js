var dotProp = require('dot-prop-immutable');

const initialState = {
  byId: {
    'default': {
      id: 'default',
      name: 'Main',
      products: []
    }
  },
  allIds: ['default']
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        allIds: [...state.allIds, action.id],
        byId: {...state.byId, [action.id]: {
            id: action.id,
            name: action.name,
            products: []
          }
        } 
      };
    case 'ADD_PRODUCT':
      return dotProp.set(state, `byId.${action.stockId}.products`, products => [...products, action.productId]);
    default:
      return state;
  }
}

export default stocks;

const initialState = {
  byId: {},
  allIds: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        allIds: [...state.allIds, action.productId],
        byId: {
          ...state.byId,
          [action.productId]: {
            id: action.productId,
            name: action.name,
          },
        },
      };
    default:
      return state;
  }
};

export default products;

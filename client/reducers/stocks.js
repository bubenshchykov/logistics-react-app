const stocks = (state = [{id: 0, name: 'Main', products: []}], action) => {
  switch (action.type) {
    case 'ADD_STOCK':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          products: []
        }
      ]
    case 'REMOVE_STOCK':
      return state;
    default:
      return state;
  }
}

export default stocks;

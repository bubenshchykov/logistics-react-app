const stocksFilter = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT_STOCK':
      return action.id;
    default:
      return state;
  }
}

export default stocksFilter;

import React from 'react';
import PropTypes from 'prop-types';

import Stock from './Stock';

const StockList = ({ stocks }) => (
  <div className="stocks">
    {stocks.map(stock =>
      (<Stock
        key={stock.id}
        {...stock}
      />))}
  </div>
);

StockList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default StockList;

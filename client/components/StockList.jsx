import React from 'react'
import PropTypes from 'prop-types'
import Stock from './Stock.jsx'

const StockList = ({ stocks, actions }) => (
  <div>
    {stocks.map(stock =>
      <Stock
        key={stock.id}
        {...stock}
        actions={actions}
      />
    )}
  </div>
)

StockList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default StockList

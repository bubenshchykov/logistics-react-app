import React from 'react'
import PropTypes from 'prop-types'

const Stock = ({id, name, selected, actions}) => (
  <span
    onClick={()=>actions.selectStock(id)}
    style={{
      color: selected ? 'green' : 'black'
    }}
  >
    {name}
  </span>
)

Stock.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Stock

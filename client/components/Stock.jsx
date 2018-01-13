import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';
import { Link } from 'react-router-dom';

const Stock = ({id, name, selected, actions}) => ( 
  <Link
    className={cn('stock', {selected})}
    to={`/stocks/${id}`}
  >
    {name}
  </Link>
)

Stock.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Stock

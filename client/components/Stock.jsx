import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Stock = ({id, name, selected, actions}) => ( 
  <NavLink
    className={cn('stock', {active: selected})}
    to={`/stocks/${id}`}
  >
    {name}
  </NavLink>
);

Stock.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired
};

export default Stock;

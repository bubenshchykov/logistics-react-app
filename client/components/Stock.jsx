import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Stock = ({
  id,
  name,
  selected,
}) => (
  <NavLink
    className={cn('stock', { active: selected })}
    to={`/stocks/${id}`}
  >
    {name}
  </NavLink>
);

Stock.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Stock.defaultProps = {
  selected: false,
};

export default Stock;

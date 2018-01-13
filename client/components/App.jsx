import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './App.scss';

const App = props => (
  <div className="app">
    <div className="app-nav">
      <NavLink
        className="app-nav-link"
        to="/stocks"
      >Stocks
      </NavLink>
      <NavLink
        className="app-nav-link"
        to="/about"
      >About
      </NavLink>
    </div>
    <div className="app-page">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;

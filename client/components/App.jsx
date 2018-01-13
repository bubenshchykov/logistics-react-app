import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-nav">
          <NavLink
            className="app-nav-link"
            to='/stocks'>Stocks</NavLink>
          <NavLink
            className="app-nav-link"
             to='/about'>About</NavLink>
        </div>
        <div className="app-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
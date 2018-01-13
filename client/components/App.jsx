import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-navbar">
          <Link to='/stocks'>Logistics</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className="app-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
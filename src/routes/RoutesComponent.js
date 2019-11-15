import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from 'react-router-dom';

class RoutesComponent extends Component {
  render() {
    return (
      <div className="nav">
        <Router>
          <div className="row">
            <Link to="/" className="grid">home</Link>
            <Link to="/about" className="grid">about</Link>
          </div>
        </Router>
      </div>
    )
  }
}

export default RoutesComponent;
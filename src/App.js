import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Connected from './Connected.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/second-route'>Second Route</Link></li>
                <li><Link to='/connected'>Connected Example</Link></li>
              </ul>
            </nav>
            <Route path='/' exact={true} render={() => (
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload. Or <Link to='/second-route'>visit our cool second route</Link>
              </p>
            )} />
            <Route path='/second-route' render={() => (
              <p>An example second route yay</p>
            )} />
            <Route path='/connected' component={Connected} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

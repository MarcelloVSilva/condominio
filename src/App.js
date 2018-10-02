import { Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="app2">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



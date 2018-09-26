import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from "./App2"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
        <Router>
          <Route exact path="app2" component={App2} />
        </Router>
      </BrowserRouter>
    );
  }
}


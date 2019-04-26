import React from 'react';
import {Link, Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Exercise1} from './Exercise1';
import {Exercise2} from './Exercise2';
import {Exercise3} from './Exercise3';
import {Exercise4} from './Exercise4';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/e1" />
          <Route path="/e1" render={
            () => (
              <div>
                <Exercise1 />
                <Link to="/e2">Demo 2</Link>
              </div>
            )}/>
          <Route path="/e2" render={
            () => (
              <div>
                <Exercise2/>
                <Link to="/e3">Demo 3</Link>
              </div>
            )}/>
          <Route path="/e3" render={
            () => (
              <div>
                <Exercise3/>
                <Link to="/e4">Demo 4</Link>
              </div>
            )}/>
          <Route path="/e4" render={
            () => (
              <div>
                <Exercise4/>
              </div>
            )}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

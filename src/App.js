import React from 'react';
import {Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
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
          <Route path="/e1" component={Exercise1}/>
          <Route path="/e2" component={Exercise2}/>
          <Route path="/e3" component={Exercise3}/>
          <Route path="/e4" component={Exercise4}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

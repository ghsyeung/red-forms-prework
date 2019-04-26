import React from 'react';
import {Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Demo1} from './Demo1';
import {Demo2} from './Demo2';
import {Demo3} from './Demo3';
import {Demo4} from './Demo4';
import {Demo5} from './Demo5';
import {Demo6} from './Demo6';
import {Demo7} from './Demo7';
import {Demo8} from './Demo8';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/e1" />
          <Route path="/e1" component={Demo1}/>
          <Route path="/e2" component={Demo2}/>
          <Route path="/e3" component={Demo3}/>
          <Route path="/e4" component={Demo4}/>
          <Route path="/e5" component={Demo5}/>
          <Route path="/e6" component={Demo6}/>
          <Route path="/e7" component={Demo7}/>
          <Route path="/e8" component={Demo8}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

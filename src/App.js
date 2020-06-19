import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Contents />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

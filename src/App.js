import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './Home';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:id" component={Movie} />
      </Switch>
    )
  }
}

export default App;

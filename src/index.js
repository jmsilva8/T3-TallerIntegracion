import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './Home';
import Movie from './Movie';
import Person from './Person';
import Planet from './Planet';
import Starship from './Starship';

const BASE_URL = "https://swapi-graphql-integracion-t3.herokuapp.com/"

const httpLink = new HttpLink({
  uri: BASE_URL
})
 
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
})

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Home} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/persons/:id" component={Person} />
        <Route path="/planets/:id" component={Planet} />
        <Route path="/starships/:id" component={Starship} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <ApolloProvider client={client}>
    {routing}
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

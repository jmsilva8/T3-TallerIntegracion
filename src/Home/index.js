import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HomeList from './HomeList';
import Loading from '../Loading';

const HOME_QUERY = gql`
  {
    allFilms(
      before:"2030"
    ) {
      edges {
        node {
          id
          episodeID
          title
          director
          releaseDate
          producers
        }
      }
    }
  }
`;

class Home extends Component {
  render() {
    const { match } = this.props

    return (
    <Query query={HOME_QUERY}>
      {({ data, loading, error }) => {
        const { allFilms } = data;

        if (loading || !allFilms) {
          return <Loading />;
        }

        if (error) {
          console.log(error)
          return (<h3>Error</h3>)
        }

        return (
          <HomeList movies={allFilms} match={match} />
        );
      }}
    </Query>
  );
}}

export default Home;
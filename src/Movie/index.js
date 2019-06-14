import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieList from './MovieList';
import Loading from '../Loading';

const MOVIES_QUERY = gql`
  query Film($id: ID) {
    film(id: $id) {
      episodeID
      title
      releaseDate
      director
      producers
      openingCrawl
      characterConnection{
        characters{
            id
            name
          }
      }
      planetConnection{
        planets{
            id
            name
          }
      }
      starshipConnection{
        starships{
          name
          id
        }
      }   
    }
  }
`;

class Movie extends Component {

  render() {
    const { match } = this.props
    const { id } = match.params

    return (
      <Query query={MOVIES_QUERY} variables={{id}}>
        {({ loading, error, data }) => {
          const { film } = data;

          if (loading || !film) {
            return <Loading />
          }

          if (error) {
            console.log(error)
            return (<h3>Error</h3>)
          }

          return (
            <MovieList film={film} match={match}/>
          )
        }}
      </Query>
    );
  }
}

export default Movie;
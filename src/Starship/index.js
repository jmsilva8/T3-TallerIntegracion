import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import StarshipList from './StarshipList';
import Loading from '../Loading';

const STARSHIPS_QUERY = gql`
  query Starship($id: ID) {
    starship(id:$id) {
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      pilotConnection{
        pilots{
          id
          name
        }
      }
      filmConnection{
        films{
          id
          title
        }
      }
    }
  }  
`;

class Starship extends Component {

  render() {
    const { match } = this.props
    const { id } = match.params

    return (
      <Query query={STARSHIPS_QUERY} variables={{id}}>
        {({ loading, error, data }) => {
          const { starship } = data;

          if (loading || !starship) {
            return <Loading />
          }

          if (error) {
            console.log(error)
            return (<h3>Error</h3>)
          }

          return (
            <StarshipList starship={starship} match={match}/>
          )
        }}
      </Query>
    );
  }
}

export default Starship;
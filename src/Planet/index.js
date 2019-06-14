import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PlanetList from './PlanetList';
import Loading from '../Loading';

const PLANETS_QUERY = gql`
  query Planet($id: ID) {
    planet(id:$id) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      residentConnection{
        residents{
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

class Planet extends Component {

  render() {
    const { match } = this.props
    const { id } = match.params

    return (
      <Query query={PLANETS_QUERY} variables={{id}}>
        {({ loading, error, data }) => {
          const { planet } = data;

          if (loading || !planet) {
            return <Loading />
          }

          if (error) {
            console.log(error)
            return (<h3>Error</h3>)
          }

          return (
            <PlanetList planet={planet} match={match}/>
          )
        }}
      </Query>
    );
  }
}

export default Planet;
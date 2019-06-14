import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PersonList from './PersonList';
import Loading from '../Loading';

const PERSONS_QUERY = gql`
  query Person($id: ID) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        id
        name
      }
      filmConnection {
        films{
          id
          title
        }
      }
      starshipConnection{
        starships{
          id
          name
        }
      }
    }
  }
`;

class Person extends Component {

  render() {
    const { match } = this.props
    const { id } = match.params

    return (
      <Query query={PERSONS_QUERY} variables={{id}}>
        {({ loading, error, data }) => {
          const { person } = data;

          if (loading || !person) {
            return <Loading />
          }

          if (error) {
            console.log(error)
            return (<h3>Error</h3>)
          }

          return (
            <PersonList person={person} match={match}/>
          )
        }}
      </Query>
    );
  }
}

export default Person;
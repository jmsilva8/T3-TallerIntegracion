import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Route, Link } from "react-router-dom";
// import { MemoryRouter as Router } from 'react-router';

import Movie from '../../Movie';
import Planet from '../../Planet';
import Starship from '../../Starship';
import '../style.css';

class PersonList extends Component {
  render() {
    const { person, match } = this.props
    
    return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{person.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Birth Year</TableCell>
          <TableCell>{person.birthYear}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eye Color</TableCell>
          <TableCell>{person.eyeColor}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hair Color</TableCell>
          <TableCell>{person.hairColor}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{person.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Height</TableCell>
          <TableCell>{person.height}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mass</TableCell>
          <TableCell>{person.mass}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Skin Color</TableCell>
          <TableCell>{person.skinColor}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Homeworld</TableCell>
          <TableCell>
            <Link to={`/planets/${person.homeworld.id}`}>
              {person.homeworld.name}
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Films</TableCell>
          <TableCell>
            <List>
              {person.filmConnection.films.map((film) => (
                <ListItem key={film.id}>
                  <Link to={`/movies/${film.id}`}>
                    {film.title}
                  </Link>
                </ListItem>  
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Starships</TableCell>
          <TableCell>
            <List>
              {person.starshipConnection.starships.map((starship) => (
                <ListItem key={starship.id}>
                  <Link to={`/starships/${starship.id}`}>
                    {starship.name}
                  </Link>
                </ListItem>  
              ))}
            </List>
          </TableCell>
        </TableRow>
      </TableBody>

      <Route path="/planets/:id" render={props => <Planet match={match}/>} />
      <Route path="/movies/:id" render={props => <Movie match={match}/>} />
      <Route path="/starships/:id" render={props => <Starship match={match}/>} />
    </Table>
    )
  }
}

export default PersonList;
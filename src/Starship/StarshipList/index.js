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
import Person from '../../Person';
import '../style.css';

class StarshipList extends Component {
  render() {
    const { starship, match } = this.props
    
    return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{starship.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Model</TableCell>
          <TableCell>{starship.model}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Starship Class</TableCell>
          <TableCell>{starship.starshipClass}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Manufacturers</TableCell>
          <TableCell>
            <List>
              {starship.manufacturers.map((manufacturer, index) => (
                <ListItem key={index}>
                  {manufacturer}
                </ListItem>
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cost in Credits</TableCell>
          <TableCell>{starship.costInCredits}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Length</TableCell>
          <TableCell>{starship.length}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Crew</TableCell>
          <TableCell>{starship.crew}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Passengers</TableCell>
          <TableCell>{starship.passengers}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Max Atmosphering Speed</TableCell>
          <TableCell>{starship.maxAtmospheringSpeed}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hyperdrive Rating</TableCell>
          <TableCell>{starship.hyperdriveRating}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MGLT</TableCell>
          <TableCell>{starship.MGLT}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cargo Capacity</TableCell>
          <TableCell>{starship.cargoCapacity}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Consumables</TableCell>
          <TableCell>{starship.consumables}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Films</TableCell>
          <TableCell>
            <List>
              {starship.filmConnection.films.map((film) => (
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
          <TableCell>Pilots</TableCell>
          <TableCell>
            <List>
              {starship.pilotConnection.pilots.map((pilot) => (
                <ListItem key={pilot.id}>
                  <Link to={`/persons/${pilot.id}`}>
                    {pilot.name}
                  </Link>
                </ListItem>  
              ))}
            </List>
          </TableCell>
        </TableRow>
      </TableBody>

      <Route path='/persons/:id' render={props => <Person match={match}/>} />
      <Route path='/movies/:id' render={props => <Movie match={match}/>} />
    </Table>
    )
  }
}

export default StarshipList;
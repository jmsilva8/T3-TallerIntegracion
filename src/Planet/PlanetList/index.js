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

class PlanetList extends Component {
  render() {
    const { planet, match } = this.props
    
    return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{planet.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Diameter</TableCell>
          <TableCell>{planet.diameter}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rotation Period</TableCell>
          <TableCell>{planet.rotationPeriod}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Orbital Period</TableCell>
          <TableCell>{planet.orbitalPeriod}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gravity</TableCell>
          <TableCell>{planet.gravity}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Population</TableCell>
          <TableCell>{planet.population}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Climates</TableCell>
          <TableCell>
            <List>
              {planet.climates.map((climate, index) => (
                <ListItem key={index}>
                  {climate}
                </ListItem>
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Terrains</TableCell>
          <TableCell>
            <List>
              {planet.terrains.map((terrain, index) => (
                <ListItem key={index}>
                  {terrain}
                </ListItem>
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Surface Water</TableCell>
          <TableCell>{planet.surfaceWater}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Films</TableCell>
          <TableCell>
            <List>
              {planet.filmConnection.films.map((film) => (
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
          <TableCell>Residents</TableCell>
          <TableCell>
            <List>
              {planet.residentConnection.residents.map((resident) => (
                <ListItem key={resident.id}>
                  <Link to={`/persons/${resident.id}`}>
                    {resident.name}
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

export default PlanetList;
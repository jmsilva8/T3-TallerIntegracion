import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Route, Link } from "react-router-dom";
// import { MemoryRouter as Router } from 'react-router';

import Person from '../../Person';
import Planet from '../../Planet';
import Starship from '../../Starship';
import '../style.css';

class MovieList extends Component {
  render() {
    const { film, match } = this.props
    
    return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Episode ID</TableCell>
          <TableCell>{film.episodeID}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>{film.title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Release Date</TableCell>
          <TableCell>{film.releaseDate}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Opening Crawl</TableCell>
          <TableCell>{film.openingCrawl}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Director</TableCell>
          <TableCell>{film.director}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Producers</TableCell>
          <TableCell>
            <List>
              {film.producers.map((producer, index) => (
                <ListItem key={index}>
                  {producer}
                </ListItem>
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Characters</TableCell>
          <TableCell>
            <List>
              {film.characterConnection.characters.map((character) => (
                <ListItem key={character.id}>
                  <Link to={`/persons/${character.id}`}>
                    {character.name}
                  </Link>                  
                </ListItem>  
              ))}
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Planets</TableCell>
          <TableCell>
            <List>
              {film.planetConnection.planets.map((planet) => (
                <ListItem key={planet.id}>
                  <Link to={`/planets/${planet.id}`}>
                    {planet.name}
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
              {film.starshipConnection.starships.map((starship) => (
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
      <Route path="/persons/:id" render={props => <Person match={match}/>} />
      <Route path="/starships/:id" render={props => <Starship match={match}/>} />
    </Table>
    )
  }
}

export default MovieList;
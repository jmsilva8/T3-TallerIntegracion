import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Route, Link } from "react-router-dom";
//import { MemoryRouter as Router } from 'react-router';
import Movie from '../../Movie';

import '../style.css';

class HomeList extends Component {
  render() {
    const { movies, match } = this.props;

    return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Episode ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Release Date</TableCell>
          <TableCell>Director</TableCell>
          <TableCell>Producers</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movies.edges.map(({node}) => (
          <TableRow key={node.id}>
            <TableCell>{node.episodeID}</TableCell>
            <TableCell>
              <Link to={`/movies/${node.id}`}>
                {node.title}
              </Link>
            </TableCell>
            <TableCell>{node.releaseDate}</TableCell>
            <TableCell>{node.director}</TableCell>
            <TableCell>
              <List>
                {node.producers.map((producer, index) => (
                  <ListItem key={index}>
                    {producer}
                  </ListItem>
                ))}
              </List>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Route path={'/movies/:id'} render={props => <Movie match={match}/>} />
    </Table>
    )
  }
}

export default HomeList;
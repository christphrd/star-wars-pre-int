import React from 'react';
import MovieData from './MovieData';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class MovieDataList extends React.Component {
    render() {
        return (
            <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Movie Title</TableCell>
                      <TableCell>Release Date</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.props.films.map(film => <MovieData key={film.episode_id} film={film}/>)}
              </TableBody>
            </Table>
        )
    }
}

export default MovieDataList
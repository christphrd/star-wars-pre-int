import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class MovieData extends React.Component {
    render() {
        return (
            <TableRow>
              <TableCell>{this.props.film.title}</TableCell>
              <TableCell>{this.props.film.release_date}</TableCell>
            </TableRow>
        )
    }
}

export default MovieData
import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



class MovieData extends React.Component {
    formatDate = d => {
        let date = new Date(d);

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        return `${weekdays[date.getUTCDay()]}, ${months[date.getUTCMonth()]} ${date.getUTCDate()} ${date.getUTCFullYear()}`
    }


    render() {
        return (
            <TableRow>
              <TableCell>{this.props.film.title}</TableCell>
              <TableCell>{this.formatDate(this.props.film.release_date)}</TableCell>
            </TableRow>
        )
    }
}

export default MovieData
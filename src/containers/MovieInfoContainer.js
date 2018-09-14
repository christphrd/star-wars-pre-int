import React from 'react';
import MovieDataList from '../components/MovieDataList';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class MovieInfoContainer extends React.Component {
    render() {
        return(
            <div>
            <Paper elevation={1}>
              <Typography variant="headline" component="h3">
                Movies with {this.props.char.charSelected}
              </Typography>
                {this.props.char.filmLinks.length === this.props.char.films.length ? <MovieDataList films={this.props.char.films}/> : null}
            </Paper>
            </div>
        )
    }
}

export default MovieInfoContainer
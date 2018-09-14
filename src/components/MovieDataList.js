import React from 'react';
import MovieData from './MovieData';

class MovieDataList extends React.Component {
    render() {
        return (
            <div>
              Movie Data List
              {this.props.films.map(film => <MovieData film={film}/>)}
            </div>
        )
    }
}

export default MovieDataList
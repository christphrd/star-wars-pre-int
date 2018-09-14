import React from 'react';
import MovieData from './MovieData';

class MovieDataList extends React.Component {
    render() {
        return (
            <div>
              {this.props.films.map(film => <MovieData key={film.episode_id} film={film}/>)}
            </div>
        )
    }
}

export default MovieDataList
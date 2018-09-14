import React from 'react';
import MovieDataList from '../components/MovieDataList';

class MovieInfoContainer extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                MovieInfoContainer for {this.props.char.charSelected}
                {this.props.char.filmLinks.length === this.props.char.films.length ? <MovieDataList films={this.props.char.films}/> : null}
            </div>
        )
    }
}

export default MovieInfoContainer
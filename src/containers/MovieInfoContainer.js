import React from 'react';
import MovieDataList from '../components/MovieDataList';

class MovieInfoContainer extends React.Component {
    render() {
        return(
            <div>
                MovieInfoContainer for {this.props.char.charSelected}
                <MovieDataList filmLinks={this.props.char.filmLinks}/>
            </div>
        )
    }
}

export default MovieInfoContainer
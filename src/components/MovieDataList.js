import React from 'react';
import MovieData from './MovieData';

class MovieDataList extends React.Component {
    componentDidMount() {
        this.props.filmLinks.map(url => this.getMovieDetails)
    }

    getMovieDetails = url => {
        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json.title, json.release_date))
    }

    render() {
        console.log(this.props.filmLinks)
        return (
            <div>Movie Data List</div>
        )
    }
}

export default MovieDataList
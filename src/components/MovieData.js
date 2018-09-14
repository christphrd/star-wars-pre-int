import React from 'react';

class MovieData extends React.Component {
    render() {
        return (
            <div>{this.props.film.title} {this.props.film.release_date}</div>
        )
    }
}

export default MovieData
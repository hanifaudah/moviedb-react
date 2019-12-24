import React, { Component } from 'react'
import MovieItem from "./MovieItem.js"

export class Movies extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {this.props.movies.map((movie)=>(
                    <MovieItem key={movie.id} movie={movie}/>
                ))}
            </div>
        );
    }
}

export default Movies

import React, { Component } from 'react'
import '../App.css';

export class MovieItem extends Component {
    render() {
        const {movie} = this.props
        return (
            <div className="d-flex flex-column align-items-center" style={movieItemStyle}>
                <img alt="" src={"http://image.tmdb.org/t/p/w200" + movie.poster_path}></img>
                <h4 style={{marginTop:"1em"}}>{movie.title}</h4>
                <p>{movie.release_date}</p>
                <button className="btnDefault">Details</button>
            </div>
        )
    }
}

const movieItemStyle = {
    margin:"1em",
    padding:"1em",
    borderRadius: "15px",
    border:"2px solid grey",
    width:"15em",
    textAlign:"center"
}

export default MovieItem

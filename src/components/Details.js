import React, { Component } from 'react';
import axios from 'axios';

export class Details extends Component {
    state = {
        movie:{}
    }
    componentDidMount() {
        const id = "http://api.themoviedb.org/3/movie/"+this.props.id+"?api_key=95368f360e3dc457d2f213e11967e205";
        axios.get(id)
        .then(res => this.setState({movie: res.data}))
    }
    render() {
        const {movie} = this.state
        return (
            <div className=" container d-flex flex-column align-items-center">
                <img alt="" src={"http://image.tmdb.org/t/p/w200" + movie.poster_path}></img>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>:</td>
                            <td>{movie.title}</td>
                        </tr>
                        <tr>
                            <td>Release Date</td>
                            <td>:</td>
                            <td>{movie.release_date}</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>:</td>
                            <td>{movie.vote_average}</td>
                        </tr>
                        <tr>
                            <td>Overview</td>
                            <td>:</td>
                            <td>{movie.overview}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details

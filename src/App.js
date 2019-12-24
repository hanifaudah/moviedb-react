import React, { Component } from 'react'
import axios from 'axios';
import Nav from "./components/Nav.js"
import MovieList from "./components/MovieList.js"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  state = {
    movies: [],
    query:""
  }

  // Test URL
  // componentDidMount() {
  //   axios.get("http://api.themoviedb.org/3/search/movie?api_key=95368f360e3dc457d2f213e11967e205&query=spiderman")
  //   .then(res => this.setState({movies: res.data.results}))
  // }

  componentDidUpdate() {
    axios.get(this.state.query)
    .then(res => this.setState({movies: res.data.results}))
  }

  changeQuery = (q) => {
    this.setState({query:"http://api.themoviedb.org/3/search/movie?api_key=95368f360e3dc457d2f213e11967e205&query="+ q});
    console.log(this.state.query);
  }

  render() {
    return (
      <div>
        <Nav changeQuery={this.changeQuery}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App


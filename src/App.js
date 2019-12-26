import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Nav from "./components/Nav.js"
import MovieList from "./components/MovieList.js"
import Details from "./components/Details.js"


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
    this.setState({query:"https://api.themoviedb.org/3/search/movie?api_key=95368f360e3dc457d2f213e11967e205&query="+ q});
    console.log(this.state.query);
  }

  render() {
    return (
      <Router>
        <div>
          <Nav changeQuery={this.changeQuery}/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <MovieList movies={this.state.movies}/>
            </React.Fragment>
          )}/>
          <Route path="/details/:id" render={props => (
            <React.Fragment>
              <Details id={props.match.params.id}/>
            </React.Fragment>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App


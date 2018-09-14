import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectionContainer from './containers/CharacterSelectionContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends Component {
  state = {
    charSelected: "",
    filmLinks: [],
    error: null,
    films: []
  }

  selectChar = (name, url) => {
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({
      charSelected: name,
      filmLinks: json.films,
      error: null,
      films: []
    }, this.fetchMovies(json.films)))
    .catch(err => {
      console.log(err)
      this.setState({
        charSelected: name,
        filmLinks: [],
        error: err,
        films: []
      })
    })
  }

  fetchMovies = filmLinks => {
    filmLinks.map(link => 
      fetch(link)
      .then(res => res.json())
      .then(json => this.setState({
        ...this.state,
        films: [...this.state.films, json]
      })))
  }

  render() {
    return (
      <div className="App" style={{ overflow: 'auto'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Star Wars React</h1>
        </header>
        <Card id="star-wars-card" raised="true">
          <CardContent>
            <CharacterSelectionContainer selectChar={this.selectChar}/>
            {!!this.state.charSelected ? <MovieInfoContainer char={this.state} /> : null}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;

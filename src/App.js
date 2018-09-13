import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectionContainer from './containers/CharacterSelectionContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';

class App extends Component {
  state = {
    charSelected: null,
    url: null,
    films: []
  }

  selectChar = (name, url) => {
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({
      charSelected: name,
      url: url,
      films: json.films
    }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Star Wars React</h1>
        </header>
        <CharacterSelectionContainer selectChar={this.selectChar}/>
        {!!this.state.charSelected ? <MovieInfoContainer char={this.state} updateFilmList={this.updateFilmList} /> : null}
      </div>
    );
  }
}

export default App;

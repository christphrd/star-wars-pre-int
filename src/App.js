import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectionContainer from './containers/CharacterSelectionContainer';

class App extends Component {
  state = {
    charSelected: false,
    urlSelected: ""
  }

  selectChar = data => {
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.?
        </p>
        <CharacterSelectionContainer selectChar={this.selectChar}/>
      </div>
    );
  }
}

export default App;

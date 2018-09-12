import React, { Component } from 'react';
import PokemonList from './containers/PokemonList/PokemonList';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PokemonList />
      </div>
    );
  }
}

export default App;

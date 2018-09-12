import React, { Component } from 'react';
import PokemonList from './containers/PokemonList/PokemonList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PokemonList />
      </div>
    );
  }
}

export default App;

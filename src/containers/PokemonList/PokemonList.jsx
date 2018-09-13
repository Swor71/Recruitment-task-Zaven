import React, { Component } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { connect } from 'react-redux';

class PokemonList extends Component {
  render() {
    const { pokemonList } = this.props;

    return (
      <div className="container">
        <ul className="d-flex justify-content-between flex-wrap p-0">
          {pokemonList && pokemonList.map((pokemon, key) => <PokemonCard key={key} pokemon={pokemon} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList
});

export default connect(mapStateToProps)(PokemonList);

import React, { Component } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { connect } from 'react-redux';
import PokemonModal from '../../components/PokemonModal/PokemonModal';

class PokemonList extends Component {
  render() {
    const { pokemonList } = this.props;

    return (
      <div className="container">
        <ul className="d-flex justify-content-between flex-wrap p-0">
          {pokemonList &&
            pokemonList.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} modalToggle={() => this.props.modalToggle(pokemon.id)} />
            ))}
        </ul>
        <PokemonModal modalToggle={id => this.props.modalToggle(id)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList
});

export default connect(mapStateToProps)(PokemonList);

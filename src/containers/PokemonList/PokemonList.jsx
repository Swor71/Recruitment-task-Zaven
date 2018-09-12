import React, { Component } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { fetchPokemons } from '../../actions/actions';
import { connect } from 'react-redux';

import './PokemonList.css';

class PokemonList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemons());
  }

  render() {
    const { pokemonList } = this.props;
    return (
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, key) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList
});

export default connect(mapStateToProps)(PokemonList);

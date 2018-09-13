import React, { Component } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { fetchPokemons } from '../../actions/actions';
import { connect } from 'react-redux';
import { pageDecrement, pageIncrement } from '../../actions/actions';
import Pagination from '../../components/Pagination/Pagination';

import './PokemonList.css';

class PokemonList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemons());
  }

  async handlePrevPage() {
    await this.props.dispatch(pageDecrement());
    this.props.dispatch(fetchPokemons(this.props.currentPage));
  }

  async handleNextPage() {
    await this.props.dispatch(pageIncrement());
    this.props.dispatch(fetchPokemons(this.props.currentPage));
  }

  render() {
    const { pokemonList, currentPage } = this.props;

    return (
      <div className="container">
        <ul className="pokemon-list">
          {pokemonList.map((pokemon, key) => (
            <PokemonCard key={key} pokemon={pokemon} />
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          prevPage={() => this.handlePrevPage()}
          nextPage={() => this.handleNextPage()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(PokemonList);

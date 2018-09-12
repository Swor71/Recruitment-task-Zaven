import React, { Component } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { fetchPokemons } from '../../actions/actions';
import { connect } from 'react-redux';
import { pageDecrement, pageIncrement } from '../../actions/actions';

import './PokemonList.css';

class PokemonList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemons());
  }

  async handlePrevPageClick() {
    console.log(this.props.currentPage);

    await this.props.dispatch(pageDecrement());
    this.props.dispatch(fetchPokemons(this.props.currentPage));
  }

  async handleNextPageClick() {
    console.log(this.props.currentPage);

    await this.props.dispatch(pageIncrement());
    this.props.dispatch(fetchPokemons(this.props.currentPage));
  }

  render() {
    const { pokemonList } = this.props;

    return (
      <div>
        <ul className="pokemon-list">
          {pokemonList.map((pokemon, key) => (
            <PokemonCard key={key} pokemon={pokemon} />
          ))}
        </ul>
        <footer className="button-area">
          <button className="btn btn-info" onClick={() => this.handlePrevPageClick()}>
            Previous Page
          </button>
          <button className="btn btn-info" onClick={() => this.handleNextPageClick()}>
            Next Page
          </button>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(PokemonList);

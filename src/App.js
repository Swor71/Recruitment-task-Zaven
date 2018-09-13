import React, { Component } from 'react';
import PokemonList from './containers/PokemonList/PokemonList';
import Navbar from './components/Navbar/Navbar';
import { fetchPokemons, pageIncrement, pageDecrement, modalToggle } from './actions/actions';
import { connect } from 'react-redux';

class App extends Component {
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

  modalToggle(id) {
    let singlePokemon = this.props.pokemonList.filter(item => item.id === id)
    this.props.dispatch(modalToggle(singlePokemon));
  }

  render() {
    const { currentPage } = this.props;
    return (
      <div className="App">
        <Navbar currentPage={currentPage}
        prevPage={() => this.handlePrevPage()}
        nextPage={() => this.handleNextPage()} />
        <PokemonList modalToggle={(id) => this.modalToggle(id)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);
import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const RECEIVED_POKEMON = 'RECEIVED_POKEMON';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export const CURRENT_PAGE_INCREMENT = 'CURRENT_PAGE_INCREMENT';
export const CURRENT_PAGE_DECREMENT = 'CURRENT_PAGE_DECREMENT';
export const MODAL_TOGGLE = 'MODAL_TOGGLE';


export function fetchPokemons(pageNumber = 1) {
  return dispatch => {
    dispatch(fetchPokemonsStart())
    axios.get(`http://localhost:3004/pokemon?_page=${pageNumber}&_limit=15`)
      .then(response => {
        dispatch(receivedPokemon(response))
      })
      .catch(err => {
        dispatch(fetchPokemonError(err))
      })
  }
}

export function fetchPokemonsStart() {
  return {
    type: FETCH_POKEMON_START
  }
}

export function receivedPokemon(response) {
  return {
    type: RECEIVED_POKEMON, 
    payload: response.data
  }
}

export function fetchPokemonError(err) {
  return {
    type: FETCH_POKEMON_ERROR, 
    payload: err
  }
}


export function pageIncrement() {
  return {
    type: CURRENT_PAGE_INCREMENT,
    payload: 1
  }
}

export function pageDecrement() {
  return {
    type: CURRENT_PAGE_DECREMENT,
    payload: 1
  }
}

export function modalToggle(singlePokemon) {
  return {
    type: MODAL_TOGGLE,
    payload: singlePokemon
  }
}
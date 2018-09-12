import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const RECEIVED_POKEMON = 'RECEIVED_POKEMON';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export function fetchPokemons() {
  return dispatch => {
    dispatch({type: FETCH_POKEMON_START})
    axios.get(`http://localhost:3004/pokemon`)
      .then(response => {
        dispatch({type: RECEIVED_POKEMON, payload: response.data})
      })
      .catch(err => {
        dispatch({type: FETCH_POKEMON_ERROR, payload: err})
      })
  }
}

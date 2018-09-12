import { FETCH_POKEMON_ERROR, FETCH_POKEMON_START, RECEIVED_POKEMON } from '../actions/actions';

const initialState = {
  pokemonList: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {...state, fetching: true}
    case RECEIVED_POKEMON:
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        pokemonList: action.payload
      }
      case FETCH_POKEMON_ERROR:
        return {
          ...state, 
          fetching: false, 
          fetched: false, 
          error: action.payload
        }
    default:
      return state;
  }
}
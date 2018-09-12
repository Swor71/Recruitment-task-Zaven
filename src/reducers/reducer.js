import { 
  FETCH_POKEMON_ERROR, 
  FETCH_POKEMON_START, 
  RECEIVED_POKEMON,
  CURRENT_PAGE_DECREMENT,
  CURRENT_PAGE_INCREMENT } from '../actions/actions';

const initialState = {
  pokemonList: [],
  fetching: false,
  fetched: false,
  error: null,
  currentPage: 1,
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
    case CURRENT_PAGE_INCREMENT:
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        currentPage: state.currentPage + action.payload
      }
    case CURRENT_PAGE_DECREMENT:
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        currentPage: state.currentPage - action.payload
      }
    default:
      return state;
  }
}
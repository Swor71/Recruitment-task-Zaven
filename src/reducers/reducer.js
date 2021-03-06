import { 
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_START,
  RECEIVED_POKEMON,
  CURRENT_PAGE_INCREMENT,
  CURRENT_PAGE_DECREMENT, 
  MODAL_TOGGLE } from '../actions/actions';

const initialState = {
  pokemonList: [],
  modalOpen: false,
  singlePokemon: [],
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
        if (state.currentPage === 11) {
          return {
            ...state, 
            fetching: false, 
            fetched: true, 
            currentPage: 11
          }
        } else {
          return {
            ...state, 
            fetching: false, 
            fetched: true, 
            currentPage: state.currentPage + action.payload
          }
        }
      case CURRENT_PAGE_DECREMENT:
        if (state.currentPage === 1) {
          return {
            ...state, 
            fetching: false, 
            fetched: true, 
            currentPage: 1
          }
        } else {
          return {
            ...state, 
            fetching: false, 
            fetched: true, 
            currentPage: state.currentPage - action.payload
        }
      }
      case MODAL_TOGGLE:
        return {
          ...state,
          modalOpen: !state.modalOpen,
          singlePokemon: action.payload
        }
    default:
      return state;
  }
}
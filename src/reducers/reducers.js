import {
    SEARCH_POKEMON_REQUEST,
    SEARCH_POKEMON_SUCCESS,
    SEARCH_POKEMON_ERROR
} from '../actions/actions';

const initialState = {
    loading: false,
    error: null,
    pokemon: undefined  
}

export function pokedexReducer(state=initialState, action){
    if (action.type === SEARCH_POKEMON_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === SEARCH_POKEMON_SUCCESS){
        console.log(action.pokemon);
        return Object.assign({}, state, {
            pokemon: action.pokemon,            
            loading: false,
            error: null            
        });
    } else if (action.type === SEARCH_POKEMON_ERROR){
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}

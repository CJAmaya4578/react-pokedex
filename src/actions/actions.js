
export const SEARCH_POKEMON_REQUEST = 'SEARCH_POKEMON_REQUEST';
export const searchPokemonRequest = () => ({
    type: SEARCH_POKEMON_REQUEST
});

export const SEARCH_POKEMON_SUCCESS = 'SEARCH_POKEMON_SUCCESS';
export const searchPokemonSuccess = pokemon => ({
    type: SEARCH_POKEMON_SUCCESS,
    pokemon
});

export const SEARCH_POKEMON_ERROR = 'SEARCH_POKEMON_ERROR';
export const searchPokemonError = error => ({
    type: SEARCH_POKEMON_ERROR,
    error
});

export const searchPokemon = pokemonName => dispatch => {
    dispatch(searchPokemonRequest());
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then(res => {
        if (!res.ok) {
            return Promise.reject("Search Failed");
        }
        return res.json();
    }).then(pokemon => {
        dispatch(searchPokemonSuccess(pokemon));
    }).catch(error => {
        dispatch(searchPokemonError(error));
    });
};
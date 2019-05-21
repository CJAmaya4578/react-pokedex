import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {pokedexReducer} from './reducers/reducers';

export default createStore(pokedexReducer, applyMiddleware(thunk));